import React from "react";
import Imgcard from "../components/Imgcard";
import Paracard from "../components/Paracard";
import Button from "../components/Button";
import Commerce from "../assets/comerpic.png";
import Todo from "../assets/todopic.png";
import Movie from "../assets/moviepic.png";
import Singlepage from "../assets/singlepic.png";

export default function Portfolio() {
  return (
    <div id="portfolio">
      <div className="hidden lg:block">
      <h1 className="text-center text-4xl font-semibold text-cyan-600 lg:mt-32 mt-16">
        PORTFOLIO
      </h1>
      
        <div className="flex mt-32 ">
          <Imgcard src={Commerce} />
          <div>
            <Paracard
              para="This is a simple eCommerce app built with React, featuring a clean UI and essential shopping functionalities like login, signup, product listing, cart, and detailed views. It includes dummy authentication and dynamic product rendering using API integration. The app also uses debounced search and responsive design for a smooth user experience."
              skills="Tech Stack: ReactJS, Tailwind CSS, DaisyUI, Redux Toolkit"
            />

            <Button
              live="https://e-shop-olive-theta.vercel.app/"
              git="https://github.com/smritiPandey87/EShop"
            />
          </div>
        </div>

        <div className="flex mt-32">
          <div>
            <Paracard
              para="A task manager web app that lets users add, edit, delete, and filter tasks by status. It features drag-and-drop functionality for reordering tasks and a clean, fully responsive user interface."
              skills=" Tech Stack: ReactJS, CSS"
            />

            <Button
              live="https://to-do-list-by-react-taupe.vercel.app/"
              git="https://github.com/smritiPandey87/ToDoList-by-React"
            />
          </div>
          <Imgcard src={Todo} />
        </div>

        <div className="flex mt-32">
          <Imgcard src={Movie} />
          <div>
            <Paracard
              para="A movie recommendation app with search functionality, watchlist management, and a home page carousel. It fetches movie data from external APIs, includes pagination, and delivers a smooth user experience with a clean UI."
              skills="Tech Stack: HTML, CSS, JavaScript"
            />

            <Button
              live="https://movie29.netlify.app/"
              git="https://github.com/smritiPandey87/Movie-Recommendation-App"
            />
          </div>
        </div>

        <div className="flex mt-32">
          <div>
            <Paracard
              para="An online store interface featuring wishlist, add-to-cart, and checkout functionalities. Includes essential pages like login, home with product listings, and cart. Built with full mobile responsiveness and real-time interactivity using JavaScript."
              skills=" Tech Stack: HTML, CSS, JavaScript "
            />

            <Button
              live="https://github.com/smritiPandey87/Single-page-Ecommerce"
              git="https://single-page-ecommerce-mauve.vercel.app/"
            />
          </div>
          <Imgcard src={Singlepage} />
        </div>
        </div>
        {/* for small screen  */}
        <div className="lg:hidden">
          <h1 className="text-center lg:text-4xl font-semibold text-cyan-600 lg:mt-32 mt-16 text-2xl">
        PORTFOLIO
      </h1>
       <div className="flex  flex-col justify-center items-center lg:mt-32 mt-16 ">
          <Imgcard src={Commerce} />
          <div className="mt-10 lg:mt-0 flex flex-col justify-start ">
            <Paracard
              para="This is a simple eCommerce app built with React, featuring a clean UI and essential shopping functionalities like login, signup, product listing, cart, and detailed views. It includes dummy authentication and dynamic product rendering using API integration. The app also uses debounced search and responsive design for a smooth user experience."
              skills="Tech Stack: ReactJS, Tailwind CSS, DaisyUI, Redux Toolkit"
            />

            <Button 
              live="https://e-shop-olive-theta.vercel.app/"
              git="https://github.com/smritiPandey87/EShop"
            />
          </div>
        </div>

        <div className="flex  flex-col justify-center items-center lg:mt-32 mt-16 ">
          <Imgcard src={Todo} />
          <div className="mt-10 lg:mt-0 flex flex-col justify-start ">
            <Paracard
              para="A task manager web app that lets users add, edit, delete, and filter tasks by status. It features drag-and-drop functionality for reordering tasks and a clean, fully responsive user interface."
              skills=" Tech Stack: ReactJS, CSS"
            />

            <Button 
              live="https://to-do-list-by-react-taupe.vercel.app/"
              git="https://github.com/smritiPandey87/ToDoList-by-React"
            />
          </div>
        </div>

        <div className="flex  flex-col justify-center items-center lg:mt-32 mt-16 ">
          <Imgcard src={Movie} />
          <div className="mt-10 lg:mt-0 flex flex-col justify-start ">
            <Paracard
              para="A movie recommendation app with search functionality, watchlist management, and a home page carousel. It fetches movie data from external APIs, includes pagination, and delivers a smooth user experience with a clean UI."
              skills="Tech Stack: HTML, CSS, JavaScript"
            />

            <Button 
              live="https://movie29.netlify.app/"
              git="https://github.com/smritiPandey87/Movie-Recommendation-App"

            />
          </div>
        </div>
        
         <div className="flex  flex-col justify-center items-center lg:mt-32 mt-16 ">
          <Imgcard src={Singlepage} />
          <div className="mt-10 lg:mt-0 flex flex-col justify-start ">
            <Paracard
              para="An online store interface featuring wishlist, add-to-cart, and checkout functionalities. Includes essential pages like login, home with product listings, and cart. Built with full mobile responsiveness and real-time interactivity using JavaScript."
              skills=" Tech Stack: HTML, CSS, JavaScript"
            />

            <Button 
              live="https://github.com/smritiPandey87/Single-page-Ecommerce"
              git="https://single-page-ecommerce-mauve.vercel.app/"
              
            />
          </div>
        </div>
        
        </div>

      </div>


      
    
  );
}
