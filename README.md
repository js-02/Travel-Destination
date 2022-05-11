# Travel-Destination
* First Creating a react App.
- npm init -y
- npx create-reat-app reat-name.
- npm install react-router-dom@6
- npm start  (to start reat).
* Create this components :
   (Home,Header,Footer,Tours) 

   1)Home component to render each of them:
    * Render Header component.
    * Render Tours component.
    * Render Footer component.

    2)Header component:
    * Add tag ---<h1>---, in header.
    * Footer component add:
      - Add social media links.
      - Author of the document.

    3)Tours component:
    * Import the data.json file.
    * Git the data from JSON file used MAP Loop, to render it. The data contain the name and an image for each tour.
  * create two new components.
    - Tour
    - TourDetail
  * Routing:
    - navigate back to the home page
    - details about the city.
  * Update Tours component:
   - render a <Tour/>
  * props:
   - pass the data use props to the <Tour/ tour={tour}
  * navigate Bar:
    1) To navigate back to the home page, path="/"
    2) details about the city, path=”/city/:id”
  * Tour Description : (use useState hooks)
    create function to control lines, when he/she press (seemore) to see hole infomation, press (seeless) to shrink the information
             
