import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import PropertiesSection from "./PropertiesSection";
import BlogsSection from "./BlogsSection";
import SearchOverlay from "../../common/SearchOverlay";
function Home(){
    return (
        <>
            <SearchOverlay />
            <HeroSection />
            <AboutSection />
            <PropertiesSection />
            <BlogsSection />
        </>
    )
}
export default Home