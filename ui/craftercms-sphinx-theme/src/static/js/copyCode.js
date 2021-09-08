import nativeToast from 'native-toast'

export function addCopyBtns (selector) {
  $(selector).each(function () {
    $(this).closest('div[class^="highlight-"]').append('<i class="fa fa-clone copy-code-btn" aria-hidden="true"></i>')
  });

  $(".copy-code-btn").on("click", function (t) {
    var e = $(t.currentTarget).parent();
    !function (t) {
      if (t) {
        var e;
        if (!(n = document.getElementById("_hiddenCopyText_"))) {
          var n = document.createElement("textarea");
          n.style.position = "absolute", n.style.left = "-9999px", n.style.top = "0", n.id = "_hiddenCopyText_", document.body.appendChild(n)
        }
        n.value = t.innerText, n.select();
        try {
          e = document.execCommand("copy")
        } catch (t) {
          nativeToast({
            message: "Oh, no...\",\"Sorry, your browser doesn't support document.execCommand('copy'), so we can't copy this code to your clipboard.",
            position: "north-east",
            timeout: 5e3,
            type: "error"
          }), e = !1
        }
        return nativeToast({
          message: "Copied to clipboard!",
          position: "north-east",
          timeout: 5e3,
          type: "success"
        }), e
      }
      nativeToast({
        message: "Oops! Element not found when trying to copy code",
        position: "north-east",
        timeout: 5e3,
        type: "error"
      })
    }(e.find(".code").length > 0 ? e.find(".code")[0] : e.find("pre")[0])
  });
}
