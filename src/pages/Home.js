import {homePageData as Homedata} from "../DATA/Homedata";
import classes from "../styles/Home.module.css";
const Home = () => {
  return (
    <section className={classes.home}>
      <h1>Hello </h1>

      <main class={classes.main}>
      <div class={classes.container}>
        <div class={classes.videos}>
          {/*  map method  */} 
          {Homedata.map((ref)=> {
            return(
              <>
           
        <div class={classes.video}>
              <img src={ref.image} alt="404 error! " />
              <p>{ref.location}</p>
              <div class={classes.qmeta}>
                <p>{ref.price}</p>
              <p>{ref.date}</p>
                <p className={classes.review}>{ref.star}</p>
              </div>
            </div>
        

            </>
            )
          })}

        </div>
      </div>
    </main>
    </section>
  );
};

export default Home;
