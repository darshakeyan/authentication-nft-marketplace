import ImageBackground from "../components/Image";
import Header from "./Header";
import Form from "./Form";

const LoginScreen = () => {
  return (
    <ImageBackground>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-background md:w-80 xl:w-100 lg:w-150 h-200 rounded-xl relative p-12">
          <div className="py-2 px-2">
            <Header
              heading="Login to your account"
              paragraph="Don't have an account yet?"
              linkName="Signup"
              linkUrl="/signup"
            />
            <Form />
          </div>
        </div>
      </div>
    </ImageBackground>
  );
};

export default LoginScreen;
