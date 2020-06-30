# reviews
Handles all reviews and review-related visuals for PetToyCo

## Related Projects

  - https://github.com/PetToyCo/photo-gallery
  - https://github.com/PetToyCo/description_directions_attributes_
  - https://github.com/PetToyCo/mainTitle_price
  - https://github.com/PetToyCo/Reviews
  - https://github.com/PetToyCo/repo
  - https://github.com/PetToyCo/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

To use this proxy server:

1. Download each of the above repos (in the section "Related Projects". Each repo represents a service to this proxy) into its own unique directory. Then follow the instructions in each ReadMe - for each service - for how to seed a MongoDB instance running on your computer, with data. Also, follow the instructions for starting each of the service's servers.
2. Then start the proxy's server by making the proxy's root directory the cd in terminal and running >npm run server
3. Visit any page that follows the form:
http://127.0.0.1:3000/product?itemID='value 100 to 199 without the quotes'

4. To run the tests, cisit the following link:
http://127.0.0.1:3000/SpecRunner.html
NOTE: as the page that loads tells you, you have to wait before the tests will run. This is to give the embedded iframe the chance to load the proxy's html file, followed by that htl file sending out get requests for te service components, followed by those components sending out requests for data.

## Requirements

- Node 12.16.1


## Development

### Installing Dependencies

From within the root directory: npm install


