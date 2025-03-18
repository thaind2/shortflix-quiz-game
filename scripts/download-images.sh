#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download gift box image
curl -o public/images/gift.png "https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/gift-icon.png"

# Download loyalty points image
curl -o public/images/loyalty-points.png "https://cdn-icons-png.flaticon.com/512/272/272525.png"

# Download data package image
curl -o public/images/data-package.png "https://cdn-icons-png.flaticon.com/512/1792/1792929.png"

# Download iPhone image
curl -o public/images/iphone.png "https://cdn-icons-png.flaticon.com/512/644/644458.png"

# Download VinFast image
curl -o public/images/vinfast.png "https://cdn-icons-png.flaticon.com/512/741/741407.png"
