import React from "react";
import img from "../../assets/images/fostercat1.jpg";
import img1 from "../../assets/images/fosterDog2.jpg";
import img2 from "../../assets/images/fosterRabbit1.jpg";
import img3 from "../../assets/images/fosterRabbit1.jpg";
import img4 from "../../assets/images/fosterRabbit2.jpg";
import img5 from "../../assets/images/fostercat3.jpg";
import img6 from "../../assets/images/fosterDog2.jpg";

const FaqSection = () => {
  return (
    <div className="pt-32 bg-blue-50">
      <div>
        <h1 className="font-extrabold text-center text-5xl text-blue-700 uppercase">
          {/* <img className="w-20 h-20" src={img} /> */}
          Frequently asked Question
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-16 px-16">
        <div className="mt-5 mb-5 ms-4 pt-16">
          <div className="collapse collapse-arrow text-blue-800">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-bold">
              Can I adopt my foster dog or cat?
            </div>
            <div className="collapse-content">
              <p className="text-black text-justify">
                If the foster family would like to adopt their foster dog or
                cat, an application, adoption fee, and contract are required
                just as they are for everyone. Please understand that we have a
                process to keep the playing field fair for all while ensuring
                that each rescue animal is placed in a great home. As such, your
                application will be treated as all others with no favouritism.
                Also note, that being approved as a foster home does not
                guarantee that you will be approved to adopt, even in the case
                of a dog you are fostering. If you do decide to adopt one of our
                dogs or cats, we ask that you continue to help foster another
                dog or cat in need.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow text-blue-800">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-bold">
              Won’t it be hard to give the animal up when they are adopted?
            </div>
            <div className="collapse-content">
              <p className="text-black text-justify">
                The simple answer…yes, of course. If it is easy, you are not
                doing it right. But as hard as it is, from the first to the
                twentieth, knowing that your foster animal is alive, loved and
                in a permanent home as a treasured family member makes it worth
                every tear. You can make it less difficult by maintaining the
                proper mindset. Imagine you were dog sitting. When the family
                returns from vacation, it would not occur to you to keep their
                dog, right? Fostering is the same concept. You are simply their
                caregiver, their advocate, their stepping stone on their journey
                to a forever family. We invite one member of the foster family
                to join us when doing the meet ‘n greets with adopters to help
                our foster families see the love connections as they happen.
                There are times when there is no love connection and that’s ok
                too, the dog or cat always ends up where they are happiest.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow text-blue-800">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-bold">
              Can I contact your rescue to speak to someone if I still have
              questions?
            </div>
            <div className="collapse-content">
              <p className="text-black text-justify">
                You sure can! If you still have a few questions, we are more
                than happy to answer them for you. Please call our office and
                leave a message 519-354-5000 or by email –
                chathamkentanimalrescue@gmail.com If there is a specific area of
                our rescue where you would like to contact someone, please visit
                our Team Page.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow text-blue-800">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-bold">
              Will my foster dog be house-trained?
            </div>
            <div className="collapse-content">
              <p className="text-black text-justify">
                Fostering 101: Pee happens! Sometimes you will get lucky
                however, even with a dog that may have been house-trained
                previously, there have been major changes in these animals lives
                and this can cause confusion, anxiety and stress. Every new
                animal that is introduced to your home should be treated as not
                house-trained, monitored and provided an abundance of
                opportunities to perform their ‘duties’ outside. Patience,
                cleaning supplies, belly bands and leaning on your fellow foster
                homes for tips and support will get you through the bumps while
                saving a life!
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-left pl-5 pt-20 font-semibold text-blue-800 text-xs">
            Slide to know us
          </h1>
          <div className="flex justify-left items-center h-screen">
            <div className=" w-full">
              <div class="carousel carousel-center h-screen max-w-md p-4 space-x-4 bg-neutral rounded-box">
                <div class="carousel-item">
                  <img src={img} className="rounded-box w-full h-1/2" alt="" />
                </div>
                <div class="carousel-item">
                  <img src={img1} className="rounded-box w-full h-1/2" alt="" />
                </div>
                <div class="carousel-item">
                  <img src={img2} className="rounded-box w-full h-1/2" alt="" />
                </div>
                <div class="carousel-item">
                  <img src={img3} className="rounded-box w-full h-1/2" alt="" />
                </div>
                <div class="carousel-item">
                  <img src={img4} className="rounded-box w-full h-1/2" alt="" />
                </div>
                <div class="carousel-item">
                  <img src={img5} className="rounded-box w-full h-1/2" alt="" />
                </div>
                <div class="carousel-item">
                  <img src={img6} className="rounded-box w-full h-1/2" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
