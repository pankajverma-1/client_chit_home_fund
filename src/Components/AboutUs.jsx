import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <style>{'body { background-color: #F7F7F7; }'}</style>
      </Helmet>
      <div className=" container-fluid p-0">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFubmVyJTIwd2VifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="AboutImage"
          className=" w-100 img-fluid"
          style={{ height: '25rem', objectFit: 'cover' }}
        />
      </div>
      <div className="container">
        <div className="row my-5">
          <div
            className="col-12 "
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <div className="h1 text-center" style={{ fontWeight: '900' }}>
              About Us
            </div>
            <div className="h1 text-center mt-3" style={{ fontWeight: '500' }}>
              &ldquo; Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo, in? &rdquo;
            </div>
          </div>
          <div
            className="col-12 col-md-6"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <p style={{ fontSize: '1.2rem' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              excepturi quasi vel id consequuntur, sequi cum assumenda pariatur
              cupiditate facere, aliquam laboriosam porro a voluptatibus
              deleniti vero nam dolor itaque. Repudiandae a, animi obcaecati aut
              amet illum reprehenderit recusandae eius modi ab, omnis aliquam
              laudantium! Recusandae, quaerat? Voluptas, excepturi id!
            </p>
            <p className="my-1" style={{ fontSize: '1.2rem' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              reiciendis recusandae commodi sunt cupiditate dolor esse! Impedit
              maiores deleniti iste?
            </p>
          </div>
          <div
            className="col-12 col-md-6 my-3"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <p style={{ fontSize: '1.2rem' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              excepturi quasi vel id consequuntur, sequi cum assumenda pariatur
              cupiditate facere, aliquam laboriosam porro a voluptatibus
              deleniti vero nam dolor itaque. Repudiandae a, animi obcaecati aut
              amet illum reprehenderit recusandae eius modi ab, omnis aliquam
              laudantium! Recusandae, quaerat? Voluptas, excepturi id!
            </p>
            <p className="my-1" style={{ fontSize: '1.2rem' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              quam.
            </p>
          </div>
          <div className="col-12">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFubmVyJTIwd2VifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="AboutImage"
              className=" w-100 img-fluid my-5"
              style={{ height: '20rem', objectFit: 'cover' }}
            />
          </div>
          <div
            className="col-12 col-md-4 p-2"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <div className="h3 text-center" style={{ fontWeight: '600' }}>
              Lorem, ipsum dolor.
            </div>
            <p className="my-1" style={{ fontSize: '1.2rem' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cumque aliquid quis deserunt quisquam. Ipsam enim minima
              blanditiis earum perspiciatis, animi consectetur atque, aut maxime
              iste recusandae eligendi, cumque praesentium dolore?
            </p>
          </div>
          <div
            className="col-12 col-md-4 p-2"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <div className="h3 text-center" style={{ fontWeight: '600' }}>
              Lorem, ipsum dolor.
            </div>
            <p className="my-1" style={{ fontSize: '1.2rem' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cumque aliquid quis deserunt quisquam. Ipsam enim minima
              blanditiis earum perspiciatis, animi consectetur atque, aut maxime
              iste recusandae eligendi, cumque praesentium dolore?
            </p>
          </div>
          <div
            className="col-12 col-md-4 p-2"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <div className="h3 text-center" style={{ fontWeight: '600' }}>
              Lorem, ipsum dolor.
            </div>
            <p className="my-1" style={{ fontSize: '1.2rem' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cumque aliquid quis deserunt quisquam. Ipsam enim minima
              blanditiis earum perspiciatis, animi consectetur atque, aut maxime
              iste recusandae eligendi, cumque praesentium dolore?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
