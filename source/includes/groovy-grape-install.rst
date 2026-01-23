Administrators can install new grapes from the command line.
To install, go to the ``CRAFTER_HOME/bin`` directory, then run the following command:

.. code-block:: bash
    :caption: *Install new grapes from the command line*

    ./groovy/bin/grape -Dgrape.root=. install <GROUP ID> <ARTIFACT ID> <VERSION>

For example, to install `Semver4j version 3.1.0 <https://github.com/vdurmont/semver4j>`__ from the command line, we'll
use the following values:

- <GROUP ID>: ``com.vdurmont``
- <ARTIFACT ID>: ``semver4j``
- <VERSION>: ``3.1.0``

.. code-block:: bash
    :caption: *Example installing semver4j (new grape) from the command line*

    ./groovy/bin/grape -Dgrape.root=. install com.vdurmont semver4j 3.1.0