import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "meetup 1",
    image:
      "https://www.futura-sciences.com/de/wp-content/uploads/2022/03/grosste-stadt-der-welt.jpg",
    address: "Dresden",
    description: "This is a first Meetup!",
  },
  {
    id: "m2",
    title: "meetup 2",
    image:
      "https://www.wissenschaft.de/wp-content/uploads/i/S/iStock-973113474-1.jpg",
    address: "New York",
    description: "This is a second Meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
