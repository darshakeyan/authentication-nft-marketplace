/* eslint-disable jsx-a11y/anchor-is-valid */
const FormService = () => {
  return (
    <>
      <div className="w-full text-center my-3">
        <span className="">OR</span>
      </div>
      <div className="-mt-1 font-bold mb-5">Log in using</div>
      <div className="auth-social flex my-2 w-full mr-2">
        <div className="mr-12 max-w-5">
          <a href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjc3MzI2MDUwLCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D">
            <img
              src="https://assets.scaler.com/assets/auth/fb-oauth-517731fada42c712a42e21bf11e592ed9aaa24d6444e251754a3d828f7b5b28e.png.gz"
              alt="facebook-oauth"
            />
          </a>
        </div>
        <div className="mr-10 max-w-5">
          <a href="https://in.linkedin.com/">
            <img
              src="https://assets.scaler.com/assets/auth/ln-oauth-8fa2b2518a2b8c74034e267e3a26c0c808fe6c7f90e7602b8ce823a77ed13f8e.png.gz"
              alt="linkedin-oauth"
            />
          </a>
        </div>
        <div className="mr-10 max-w-5">
          <a href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2FTachibanaYoshino%2FAnimeGANv2">
            <img
              src="https://assets.scaler.com/assets/auth/git-oauth-6e42df27a979324867fb032ee90829f1b437b1452e1656ad8350e1e2999851ba.png.gz"
              alt="github-oauth"
            />
          </a>
        </div>
        <div class="mr-10 max-w-5">
          <a href="https://www.google.com/account/about/">
            <img
              src="https://assets.scaler.com/assets/auth/google-oauth-24cba186e53a1c30ef682062820af75fb8fb0814bd1d6ef1c448e888dfe39323.png.gz"
              alt="google-oauth"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default FormService;
