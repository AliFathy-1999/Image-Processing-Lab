<div align="center">
  <img src="frontend/src/assets/Websitelogo.gif">
  <h3>Image Processing Lab README</h3>
</div>

# Image Processing Lab Project

 Image Proccessing Lab Website is an **Online Image Editor**. 

# Project Description


It is used in **Resizing, Rotating, Removing Background, Bluring images**.It helps users also in changing Color **(example: Tint)** and making effects on any image **(example: Brightness, GrayScale, Cmyk, Black and White Effect, Sharpness Filter, Median Filter, Normalise Effect and Histogram Effect)**.


## Built With

<ul>
  <li>NodeJS</li>
  <li>AngularJS</li>
  <li>HTML</li>
  <li>CSS</li>
  <li>Bootstrap</li>  
</ul>

## Modules Used in Backend

<ul>
  <li>Express</li>
  <li>cors</li>
  <li>axios</li>
  <li>dotenv</li>
  <li>form-data</li>  
  <li>multer</li>
  <li>remove.bg</li>
  <li>sharp</li> 
</ul>

## Modules Used in Frontend

<ul>
  <li>ngx-toastr</li>
  <li>font-awesome</li>
  <li>tslibs</li>
  <li>zone.js</li>
  <li>angular materials</li>  
</ul>

## Prerequisites   

 Download and setup npm and nodejs


# How to Install and Run the Project



 1. Clone this repo

   ```sh
      git clone https://github.com/AliFathy-1999/Image-Processing-Lab.git
   ```
2. Install all dependencies needed in this project through</li>


  * To install all Frontend Dependencies & Install the CLI using the npm package manager:

  ```sh
      cd frontend
      npm install -g @angular/cli
      npm install
  ```
  * To install all Backend Dependencies

  * if you’re in your home folder

   ```sh
      npm install
   ```

  * if you’re in frontend folder and you want to go back 

   ```sh
      cd ..
      npm install
   ```

3. Run The Project
   
* Make sure you’re in your **home folder** 
  
    ```sh
      npm run all
   ``` 

# How to Use the Project

* Make Sure that you upload image of type **tiff, png, jpg and jpeg** and maxmium size is **20 migabytes** 

## Image Operations

1. How to **Resize Image** :
    1. Uploads image.
    2. Enter image width and height **width and height values between 10 and 1500**. 
    3. Click on Resize Image button to apply resize. 
    4. Click on download image button.


<div align="center"><img src="frontend/src/assets/icons/resize.png"></div>

2. How to **Remove Background** from image (Make image transparency) :
    1. Uploads image.
    2. Click on Background Remove button to apply transparency. 
    3. Click on download image button.

<div align="center"><img src="frontend/src/assets/icons/backgroundRemover.png"></div>

3. How to **Rotate Image** :
    1. Uploads image.
    2. Select one of Options **(Simple or advanced)**
      * **Simple option** Click on any image rotated or you can manually enter angle value.
      * **Advanced option** Set the angle by slider and Set the Background Color or you can ignore it.
    3. Click on Rotate button to apply rotation. 
    4. Click on download image button.
    
<div align="center"><img src="frontend/src/assets/icons/rotate.png"></div>

4. How to **Blur Image** :
    1. Uploads image.
    2. Enter value of **blur percentage**
      * **You can enter Blur sigma value via clicking on Image or enter value manually.**
    3. Click on Blur button to apply blur effect. 
    4. Click on download image button.
    
<div align="center"><img src="frontend/src/assets/icons/blur.png"></div>

## Change Color

1. How to **Change Color** :
    1. Uploads image.
    2. Select one of settings **Tint or Effect Setting** :
    3.  **Tint Setting** Choose the colour you want from **Color Pick**.
        <div align="center"><img src="frontend/src/assets/icons/tint.png"></div>
    4. **Effect Setting**  Select Effect you want :
      * **GrayScale Effect** : Click on Apply GrayScale button. 
      <div align="center"><img src="frontend/src/assets/EffectImages/GrayScale.jpg" width="200"></div>

      * **CMYK Effect** :  Click on Cmyk in the slider and Click Apply CMYK button.
      <div align="center"><img src="frontend/src/assets/EffectImages/cmyk.jpg" width="200"></div> 

      * **Black and White Effect** : Click on Apply B&W button.
      <div align="center"><img src="frontend/src/assets/EffectImages/bw.jpg" width="200"></div> 

      * **sharpen Filter** : **Enter Sharpness value** and Click on Apply Sharpness button.
      <div align="center"><img src="frontend/src/assets/EffectImages/sharpen.jpg" width="200"></div> 

      * **sharpen Filter** : **Enter Median value** and Click on Apply Median button.
      <div align="center"><img src="frontend/src/assets/EffectImages/median.jpg" width="200"></div> 

      * **sharpen Filter** : Click on **Apply Normalise** button.
      <div align="center"><img src="frontend/src/assets/EffectImages/Normalise.jpg" width="200"></div> 

      * **Histogram Filter** : **Enter Histogram First and Second values (0-20)** and Click on Apply Equalize button.
      <div align="center"><img src="frontend/src/assets/EffectImages/histogram.jpg" width="200"></div> 

      * **Brightness Effect** : **Enter Brightness value (0-3.5)** and Click on Apply Brightness button.
      <div align="center"><img src="frontend/src/assets/EffectImages/brightness.jpg" width="200"></div> 
    4. Click on download image button.
