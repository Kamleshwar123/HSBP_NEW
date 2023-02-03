import SvgIcon from "../../../constant/SvgIcon";

const LeftLink = [
    {
        label: "About Us",
        srcUrl: "/about-us",
        openNewTab: false
    },
    {
        label: "Nearby Salons",
        srcUrl: "/salons",
        openNewTab: false
    },
    {
        label: "Franchises",
        srcUrl: "/franchise",
        openNewTab: false
    },
    {
        label: "Salon at Home",
        srcUrl: "/services",
        openNewTab: false
    },
    {
        label: "Beauty Products",
        srcUrl: "/product-home",
        openNewTab: false
    },
    {
        label: "Institutes",
        srcUrl: "/institutes",
        openNewTab: false
    },
    {
        label: "Contact us",
        srcUrl: "/contact-us",
        openNewTab: false
    },
    {
        label: "Blog",
        srcUrl: "/",
        openNewTab: false
    }
];
const RightLink = [
    {
        label: "Appointment",
        srcUrl: "/",
        openNewTab: false
    },
    {
        label: "Query",
        srcUrl: "/faqs",
        openNewTab: false
    },
    {
        label: "Query I am a Beautician",
        srcUrl: "/i-am-beautician",
        openNewTab: false
    },
    {
        label: "Site Map",
        srcUrl: "/",
        openNewTab: false
    },
    {
        label: "Apps Download",
        srcUrl: "/",
        openNewTab: false
    },
    {
        label: "Awards",
        srcUrl: "/",
        openNewTab: false
    },
    {
        label: "News, Events & Media",
        srcUrl: "/",
        openNewTab: false
    },
    {
        label: "Buy Subscription",
        srcUrl: "/",
        openNewTab: false
    },
    {
        label: "Client's Speak",
        srcUrl: "/clients-speak",
        openNewTab: false
    }
];
const SocialLink = [
    {
        icon: <SvgIcon.Facebook />,
        srcUrl: "https://www.facebook.com/",
        openNewTab: false
    },
    {
        icon: <SvgIcon.Insta />,
        srcUrl: "https://www.instagram.com/",
        openNewTab: false
    },
    {
        icon: <SvgIcon.Twitter />,
        srcUrl: "https://twitter.com/",
        openNewTab: false
    },
    {
        icon: <SvgIcon.Linkedin />,
        srcUrl: "https://www.linkedin.com/",
        openNewTab: false
    }
]
const FooterCity = ["Noida", "Delhi", "Gurgaon", "Faridabad", "Mumbai", "Chandigarh", "Ghaziabad", "Kolkata", "Pune", "Bangalore", "Lucknow", "Rachi", "Patna", "Gorakhpur", "Kanpur", "Chennai", "Agra", "Chandigarh", "Hyderabad", "Bhopal", "Goa", "Greater Noida", "Jaipur", "Mathura", "Nagpur", "Vadodara", "Varanasi"];
export { LeftLink, RightLink, SocialLink, FooterCity }