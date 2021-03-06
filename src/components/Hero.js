import React from "react";

const Hero = () => {
  return (
    <section className="py-12 px-4">
      <div className="flex flex-wrap text-left">
        <div className="w-full lg:w-3/4 px-4 mb-8 lg:mb-0">
          <iframe
            src="https://www.youtube.com/embed/PY2FQ-LgmYo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"
            height="500px"
            frameBorder={0}
          />
          <h1 className="text-3xl mt-2 mb-6 leading-tight font-heading">
            Reckless Serenade - Arctic Monkeys
          </h1>
          <h3>Descripcion: </h3>
          <p>
            Provided to YouTube by Domino Reckless Serenade · Arctic Monkeys
            Suck It and See ℗ Domino Recording Co Ltd Released on: 2011-06-06
            Artist: Arctic Monkeys Auto-generated by YouTube.
          </p>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-2 lg:mb-0 flex flex-wrap justify-center contenedor-lado overflow-auto">
          <h3 className="text-xl leading-tight">Lista de reproduccion</h3>
          <div className="w-full h-auto">
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/ytOtPkiw_5g"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <span className="text-lg mt-2 leading-tight">
              Anyways - Arctic Monkeys
            </span>
          </div>
          <div className="w-full h-auto">
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/7wJ-FkT0kFA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <span className="text-lg mt-2 leading-tight">
              Black Treacble - Arctic Monkeys
            </span>
          </div>
          <div className="w-full h-auto">
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/ma9I9VBKPiw"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <span className="text-lg mt-2 leading-tight">
              Fluorescent Adolescent - Arctic Monkeys
            </span>
          </div>
          <div className="w-full h-auto">
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/6366dxFf-Os"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <span className="text-lg mt-2 leading-tight">
              Why'd You Only Call Me When You're High? - Arctic Monkeys
            </span>
          </div>
          <div className="w-full h-auto">
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/bJxdWX-apMM"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <span className="text-lg mt-2 leading-tight">
              Piledriver Waltz - Arctic Monkeys
            </span>
          </div>
          <div className="w-full h-auto">
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/71Es-8FfATo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <span className="text-lg mt-2 leading-tight">
              Four Out Of Five - Arctic Monkeys
            </span>
          </div>
          <div className="w-full h-auto">
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/BjC0KUxiMhc"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <span className="text-lg mt-2 leading-tight">
              Ode To The Mets - The Strokes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
