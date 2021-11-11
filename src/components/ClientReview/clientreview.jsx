import './clientreview.scss'
 import {userImage} from "./icon";
import {useEffect, useRef} from "react";
import {gsap, TimelineMax} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ClientReview= () =>{





    const el = useRef();
    const q = gsap.utils.selector(el);

    // const tl = new TimelineMax();


    // eslint-disable-next-line no-undef
    useEffect(() => {


        gsap.from(
            q(".clientReviewHead"), {
                autoAlpha:0,
                y: 30,
                scrollTrigger:".clientReviewHead"
                // stagger: 0.5
            }

        )

        // Target ALL descendants with the class of .box
        gsap.set(q(".reviewCardsDetails"),
            {
              y:30,
                autoAlpha:0,
                // delay:0.3,
                scrollTrigger:".reviewCardsDetails"
                // y:20
            });

        gsap.to(q(".reviewCardsDetails"), {
            delay:0.3,
            autoAlpha:1,
            y: 0,
            stagger: 0.45,
            scrollTrigger:".reviewCardsDetails"// 0.1 seconds between when each ".box" element starts animating
        });




    });



    // gsap.to(".box", {
    //     y: 100,
    //     stagger: 0.1 // 0.1 seconds between when each ".box" element starts animating
    // });
    return(

<div className='clientReview'>
     <div className='clientReviewContainer'  ref={el}>
<h1 className="clientReviewHead">Phasellus gravida ex at lorem mattis</h1>



         <div className='reviewCards'>


             <div className='reviewCardsDetails'>
                 <div className='paragraph'>
                     <p>Curabitur posuere ornare libero nec suscipit. Aenean maximus neque venenatis,
                         ultrices sem id, mattis nisi. Etiam eget feugiat orci, nec scelerisque ante</p>
                 </div>


                 <div className='imageAndName'>

                     {userImage}

                     <h4 className='name'>

                      Gbadamosi Majekodunmi
                     </h4>

                 </div>

             </div>



             <div className='reviewCardsDetails'>
                 <div className='paragraph'>
                     <p>Curabitur posuere ornare libero nec suscipit. Aenean maximus neque venenatis,
                         ultrices sem id, mattis nisi. Etiam eget feugiat orci, nec scelerisque ante</p>
                 </div>


                 <div className='imageAndName'>

                     {userImage}

                     <h4 className='name'>

                         Gbadamosi Majekodunmi
                     </h4>

                 </div>

             </div>

             <div className='reviewCardsDetails'>
                 <div className='paragraph'>
                     <p>Curabitur posuere ornare libero nec suscipit. Aenean maximus neque venenatis,
                         ultrices sem id, mattis nisi. Etiam eget feugiat orci, nec scelerisque ante</p>
                 </div>


                 <div className='imageAndName'>

                     {userImage}

                     <h4 className='name'>

                         Gbadamosi Majekodunmi
                     </h4>

                 </div>

             </div>

             <div className='reviewCardsDetails'>
                 <div className='paragraph'>
                     <p>Curabitur posuere ornare libero nec suscipit. Aenean maximus neque venenatis,
                         ultrices sem id, mattis nisi. Etiam eget feugiat orci, nec scelerisque ante</p>
                 </div>


                 <div className='imageAndName'>

                     {userImage}

                     <h4 className='name'>

                         Gbadamosi Majekodunmi
                     </h4>

                 </div>

             </div>




         </div>





     </div>
</div>
    )


}

export default ClientReview