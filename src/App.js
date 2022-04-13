import Header from "./Components/Header";
import Accessories from "./Pages/Accessories";
import Home from "./Pages/Home";
import {Switch,Route} from 'react-router-dom';
import ProductDetails from "./Pages/ProductDetails";
import Women from './Components/Women'
import Mens from './Components/Mens'
import ExpCollection from "./Components/ExpCollection";
import BlogFashionTshirt from "./Components/BlogFashionTshirt";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import AboutUsCreative from "./Components/AboutUsCreative";
import BlogGrid from "./Components/BlogGrid";
import BlogList from "./Components/BlogList";
import Faq from "./Components/Faq";
import AboutUsSimple from "./Components/AboutUsSimple";
import Tab from "./Tabs/Tab";
import ImageChange from "./Tabs/ImageChange";
import SaleDropDown from "./Components/SaleDropDown";
import Pinterest from "./Components/Pinterest";


function App() {
  return (
   <>
     <Header/>
     <Switch>
          <Route exact path="/">
          <Home/>
          </Route>

          <Route exact path="/accessories">
          <Accessories/>
          </Route>

    
          <Route exact path="/productdetails">
         <ProductDetails/>
          </Route>

          
          <Route exact path="/women">
         <Women/>
          </Route>

          <Route exact path="/collection">
         <ExpCollection/>
          </Route>

          <Route exact path="/men">
         <Mens/>
          </Route>

          <Route exact path="/tshirt">
         <BlogFashionTshirt/>
          </Route>

          <Route exact path="/aboutussimple">
         <AboutUsSimple/>
          </Route>

          <Route exact path="/aboutcreative">
         <AboutUsCreative/>
          </Route>

          <Route exact path="/faq">
         <Faq/>
          </Route>

          <Route exact path="/policy">
         <PrivacyPolicy/>
          </Route>

          <Route exact path="/bloggrid">
         <BlogGrid/>
          </Route>

          <Route exact path="/bloglist">
          <BlogList/>
          </Route>

          <Route exact path="/tab">
          <Tab/>
          </Route>

          <Route exact path="/imgchange">
          <ImageChange/>
          </Route>

          
          <Route exact path="/pinterest">
          <Pinterest/>
          </Route>


        </Switch>
   
    
   </>
  );
}

export default App;
