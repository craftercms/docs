# CrafterCMS documentation.

## Requirements

#### Install Python & PIP & pipenv

First, you need to install Python 3 and PIP (if not already present on your system):

`$ sudo apt-get install python3-pip`

You might need to update PIP right away

`$ pip3 install -U pip`

Then, install `pipenv`

`$ sudo pip install pipenv`

and the extension
pip3 install sphinxext-remoteliteralinclude

Finally, install dependencies and activate the pipenv shell

`$ pipenv install`
`$ pipenv shell`

## Building CrafterCMS documentation

After meeting all requirements, you're ready to build the docs by running this command:

`$ make html`

And the docs will be under `build` folder.

To clear the build folder run

`$ make clean`

