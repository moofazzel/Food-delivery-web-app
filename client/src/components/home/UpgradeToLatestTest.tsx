import bg_1 from '../../assets/bg/bg-1.webp';
import signature from '../../assets/signature.webp';

const UpgradeToLatestTest = () => {
  return (
    <>
      <div
        className="h-full py-16"
        style={{
          backgroundImage: `linear-gradient(#00000010, #00000010), url(${bg_1})`,
          // backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          position: 'relative',
          backgroundPosition: '50% -230.652px',
        }}
      >
        <div className="container h-full md:px-5 ">
          <div className="max-w-[800px] py-24">
            <h2 className="font-bold text-[2rem] mb-6 text-white">
              Upgrade To The Latest Taste!
            </h2>
            <p className="mb-5 text-base text-white lg:font-semibold">
              Est sit amet facilisis magna etiam tempor. Dolor sed viverra ipsum
              nunc aliquet bibendum enim. Magnis dis parturient montes nascetur
              ridiculus mus mauris vitae ultricies. Commodo ullamcorper a lacus
              vestibulum sed arcu non odio euismod. Elementum nisi quis eleifend
              quam adipiscing vitae proin sagittis nisl. Auctor augue mauris
              gravida.
              <br /> <br />
              Tristique sollicitudin nibh sit amet commodo nulla facilisi
              nullam. Sodales ut eu sem integer vitae. Nibh tortor id aliquet
              lectus proin nibh. Sed velit dignissim sodales ut.
            </p>
            <div>
              <img className="mb-6" src={signature} alt="" />
              <span className="text-white ">Tanya - Reciepe</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpgradeToLatestTest;
