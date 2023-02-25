import frame1 from "../../images/Frame1.png";
import frame2 from "../../images/Frame2.png";
import frame3 from "../../images/Frame3.png";
import account from "../../images/account.png";
import saving from "../../images/savings.png";
import card from "../../images/add_card.png";
import home from "../../images/home.png";
import car from "../../images/car.png";
import plane from "../../images/Plane.png";
import calander from "../../images/calander.png";
import plan from "../../images/plan.png";



const HeroData = [
    {
		id: 1,
		img: frame1,
		title: "BANKING",
		description: [
			{
				id: 1,
				icon: account,
				title: "Add Account",
				text: "Your Multiple Bank Account",
			},
			{
				id: 2,
				icon: saving,
				title: "Savings",
				text: "Explore Saving Plans",
			},
			{
				id: 3,
				icon: card,
				title: "Add Cards",
				text: "Personalize Your Cards",
			},
		]
	},
    {
		id: 2,
		img: frame2,
		title: "INSURANCE",
		description: [
			{
				id: 1,
				icon: home,
				title: "Home",
				text: "1 Year - 25 Years",
			},
			{
				id: 2,
				icon: car,
				title: "Mobility",
				text: "3 months - 10 Years",
			},
			{
				id: 3,
				icon: plane,
				title: "Traveling",
				text: "Day long - 6 months",
			},
		]
	},
    {
		id: 3,
		img: frame3,
		title: "TRAVEL",
		description: [
			{
				id: 1,
				icon: calander,
				title: "New Booking",
				text: "Book a new schedule",
			},
			{
				id: 2,
				icon: plan,
				title: "Plan & Roots",
				text: "Explore all packages",
			},
			
		]
	}

]

export default HeroData