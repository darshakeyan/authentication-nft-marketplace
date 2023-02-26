import ImageBackground from "../components/Image";
import Header from "../components/Form/Header";
import Form from "../components/Form/SignUpForm/Form";

const SignUpScreen = () => {
  return (
    <ImageBackground>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-background md:w-80 xl:w-100 lg:w-150 h-225 rounded-xl relative p-10">
          <div className="py-2 px-2">
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account?"
              linkName="Login"
              linkUrl="/login"
            />
            <Form />
          </div>
        </div>
      </div>
    </ImageBackground>
  );
};

export default SignUpScreen;
