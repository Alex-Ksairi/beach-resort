# Getting Started with Create React App

In order to install node-sass package [node-sass](https://www.npmjs.com/package/node-sass).

In order to install react-icons package [icons](https://react-icons.github.io/react-icons/).

In order to install react-router-dom package [react-router-dom](https://reactrouter.com/web/guides/quick-start).


<!-- STEPS
    1- create-react-app + file name 
    2- setting up folders and files
    3- installing packages such as: 

        - npm i node-sass or yarn add node-sass 
        - npm i react-icons or yarn add react-icons
        - npm i react-router-dom or yarn add react-router-dom

    4- adding bootstrap CSS as well as bundle SCRIPT links
    5- font awesome just in case
    6- setting up images
-->


<!-- 



/* featured rooms */

.featured-rooms {
  padding: 5rem 0;
}
.featured-rooms-center {
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 40px;
}
@media screen and (min-width: 776px) {
  .featured-rooms-center {
    width: 90vw;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }
}
@media screen and (min-width: 992px) {
  .featured-rooms-center {
    width: 95vw;
    max-width: 1170px;
  }
}
/* end pf featured rooms */
/* room */
.room {
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
}
.room:hover {
  box-shadow: var(--darkShadow);
}

.img-container {
  position: relative;
}
.img-container img {
  width: 100%;
  display: block;
  transition: var(--mainTransition);
}
.price-top {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  color: var(--mainWhite);
  padding: 0.3rem 0.6rem 0.5rem;
  border-bottom-right-radius: 1rem;
  font-size: 0.5rem;
  text-align: center;
  transition: var(--mainTransition);
}
.price-top h6 {
  margin-bottom: 0;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: var(--mainSpacing);
}
.room-link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: scale(0);
  transition: all 0.3s linear;
}
.img-container:hover {
  background: rgba(0, 0, 0, 0.8);
}
.img-container:hover img {
  opacity: 0.3;
}
.img-container:hover .price-top {
  opacity: 0;
}
.img-container:hover .room-link {
  transform: translate(-50%, -50%) scale(1);
}
.room-info {
  background: var(--darkGrey);
  text-transform: capitalize;
  padding: 0.5rem 0;
  text-align: center;
  font-weight: 700;
  letter-spacing: var(--mainSpacing);
}
/* end of room  */
/* single room*/

.single-room {
  padding: 5rem 0 0 0;
}
.single-room-images {
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 50px;
}
.single-room-images img {
  width: 100%;
  display: block;
}
.single-room-info {
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr;
  margin: 2rem auto;
}
.desc,
.info {
  margin: 1rem 0;
}
.desc h3 {
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
}
.desc p {
  line-height: 1.5;
}
.info h3,
.info h6 {
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
}

.info h6 {
  font-weight: 300;
}
.room-extras {
  width: 80vw;
  margin: 0 auto 3rem auto;
}
.room-extras h6 {
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
}
.extras {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
}
@media screen and (min-width: 992px) {
  .single-room-images,
  .single-room-info,
  .room-extras {
    width: 95vw;
    max-width: 1170px;
  }
  .single-room-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
  .info {
    padding-left: 3rem;
  }
}
/* end of single room*/
/* roomlist */
.roomslist {
  padding: 5rem 0;
}
.roomslist-center {
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 30px;
}

@media screen and (min-width: 776px) {
  .roomslist-center {
    width: 90vw;
  }
}
@media screen and (min-width: 992px) {
  .roomslist-center {
    width: 95vw;
    max-width: 1170px;
  }
}
/* end of roomlist */
/*  rooms fitler*/
.filter-container {
  padding: 5rem 0;
}
.filter-form {
  width: 60vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 40px;
}
.form-group {
  text-transform: capitalize;
}
.form-group label {
  display: block;
  letter-spacing: var(--mainSpacing);
  margin-bottom: 0.5rem;
}
.form-control {
  width: 100%;
  background: transparent;
  font-size: 1rem;
}
.size-inputs {
  display: flex;
}
.size-input {
  width: 40%;
  padding: 0.2rem;
  border: 1px solid var(--mainBlack);
  border-radius: 0.3rem;
  margin-right: 0.3rem;
}
.single-extra label {
  display: inline-block;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}
@media screen and (min-width: 776px) {
  .filter-form {
    width: 70vw;
  }
}
@media screen and (min-width: 992px) {
  .filter-form {
    width: 95vw;
    max-width: 1170px;
  }
}

 -->