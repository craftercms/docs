package org.craftercms.aws.utils

@Grapes(
    @Grab(group='com.amazonaws', module='aws-java-sdk-cloudfront', version='1.11.435', initClass = false)
)

import java.util.Date;
import groovy.util.logging.Slf4j

import javax.servlet.http.Cookie

import com.amazonaws.auth.PEM;
import com.amazonaws.services.cloudfront.CloudFrontCookieSigner
import com.amazonaws.services.cloudfront.util.SignerUtils.Protocol

@Slf4j
class CloudFrontUtils {
    
    static void setSignedCookies(request, response, siteConfig) {
        if (!signedCookiesExist(request)) {
            def protocol = Protocol.https;
            def domain = siteConfig.getString('aws.cloudFront.signedCookies.domain')
            def resourcePath = siteConfig.getString('aws.cloudFront.signedCookies.resourcePath')
            def keyPairId = siteConfig.getString('aws.cloudFront.signedCookies.keyPairId')
            def privateKeyContent = siteConfig.getString('aws.cloudFront.signedCookies.privateKey')
            def privateKey = PEM.readPrivateKey(new ByteArrayInputStream(privateKeyContent.getBytes('UTF-8')))
            def cloudFrontTimeToExpire = siteConfig.getLong('aws.cloudFront.signedCookies.cloudFrontTimeToExpire')
            def cloudFrontExpiresOn = new Date(System.currentTimeMillis() + (cloudFrontTimeToExpire * 60 * 1000))
            def cookieMaxAge = siteConfig.getLong('aws.cloudFront.signedCookies.cookieMaxAge') * 60
            def cookieSecure = true
            def cookiePath = '/'
            
            def cookies = CloudFrontCookieSigner.getCookiesForCustomPolicy(protocol, domain, privateKey, resourcePath, keyPairId, cloudFrontExpiresOn, null, null)
            
            def signatureCookie = new Cookie(cookies.signature.key, cookies.signature.value)
                signatureCookie.secure = cookieSecure
                signatureCookie.maxAge = cookieMaxAge
                signatureCookie.path = cookiePath
                
            def keyPairIdCookie = new Cookie(cookies.keyPairId.key, cookies.keyPairId.value)
                keyPairIdCookie.secure = cookieSecure
                keyPairIdCookie.maxAge = cookieMaxAge
                keyPairIdCookie.path = cookiePath
                
            def policyCookie = new Cookie(cookies.policy.key, cookies.policy.value)
                policyCookie.secure = cookieSecure
                policyCookie.maxAge = cookieMaxAge
                policyCookie.path = cookiePath
            
            response.addCookie(signatureCookie)
            response.addCookie(keyPairIdCookie)
            response.addCookie(policyCookie)
        }
    }
    
    static boolean signedCookiesExist(request) {
        def cookies = request.cookies
        for (int i = 0; i < cookies.length; i++) {
          if ('CloudFront-Key-Pair-Id' == cookies[i].name) {
              return true
          }
        }
        
        return false
    }

}
