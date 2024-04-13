import React from "react";

function Contact() {
  return (
    <div className="mt-10">
      <div className="w-6/12 mx-auto text-left">
        <p className="md:text-lg mb-6 ">
          Welcome to our Contact Us page! We're always here to answer your
          questions and address any concerns you might have. Our team is ready
          to help out in any way we can. Also, we love hearing your suggestions
          and tips – your feedback is invaluable in making Ketodelia even
          better. Looking forward to hearing from you!
        </p>
        <p className="md:text-lg mb-6 ">
          If you need to get in touch with us, you have several options
          available. You can give us a call at 416-623-0317 and speak with one
          of our friendly staff members. Alternatively, you can use the live
          chat feature located in the bottom right corner of our website. This
          is a great option if you prefer a quick and convenient way to get in
          touch with us.
        </p>
        <p className="md:text-lg mb-6 ">
          Lastly, you can fill out the contact form on this page. Simply provide
          us with your contact information and a brief message, and we will get
          back to you as soon as possible.
        </p>
        <p className="md:text-lg mb-6">
          Ketodelia is committed to providing our customers with the best
          possible experience. We value your feedback and are always looking for
          ways to improve. So, please don't hesitate to reach out to us with any
          questions, comments, or suggestions. We're always happy to assist you
          in any way we can.
        </p>
        <p className="md:text-lg mb-6">
          Thank you for choosing our restaurant, we look forward to hearing from
          you!
        </p>
      </div>

      <div
        className="w-[260px] mx-auto mt-10 border-2 border-black rounded-lg overflow-hidden"
        style={{ borderBottom: "5px solid black" }}
      >
        <img
          src="https://cdn.shopify.com/s/files/1/0665/2110/4628/files/316366734_6318662481286_1019662693495287861_n_480x480.png?v=1675466925"
          alt="best keto ever"
          className=""
        />
      </div>

      <form className="w-7/12 h-[400px] mx-auto md:mt-16">
        <div className="m-4 flex w-4/5 mx-auto">
          <div
            className="w-1/2 p-2 m-1 border-2 border-black rounded-xl hover:border-4 hover:border-black"
            style={{ borderBottom: "5px solid black" }}
          >
            <input type="text" placeholder="Name" />
          </div>
          <div
            className="w-1/2 p-2 m-1 border-2 border-black rounded-xl hover:border-4 hover:border-black"
            style={{ borderBottom: "5px solid black" }}
          >
            <input type="email" placeholder="Email" />
          </div>
        </div>

        <div className="m-4 flex w-4/5  mx-auto">
          <div
            className="w-full p-2 m-1 border-2 border-black rounded-xl hover:border-4 hover:border-black"
            style={{ borderBottom: "5px solid black" }}
          >
            <input type="Number" placeholder="Phone Number" />
          </div>
        </div>

        <div className=" flex w-4/5 mx-auto">
          <div
            className="w-full h-[110px] p-2 m-1 border-2 border-black rounded-xl hover:border-4 hover:border-black"
            style={{ borderBottom: "5px solid black" }}
          >
            <input type="text" placeholder="Name" />
          </div>
        </div>

        <div className="mb-4 flex w-4/5  mx-auto">
          <button className=" mt-6 md:mt-10 text-lg w-[180px] md:w-[120px] rounded-3xl bg-purple-500 p-3 text-white border-2 border-b-purple-800 hover:border-none">
            send
          </button>
        </div>
      </form>

      <div className="md:w-full h-[230px] md:h-full overflow-hidden mt-14 mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15542.882638301186!2d77.6346118!3d13.1168745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae191736187a37%3A0x3092096ba7fb4c9b!2sREVA%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1711788210608!5m2!1sen!2sin"
          width="1570"
          height="500"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=""
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
