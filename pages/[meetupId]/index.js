import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetailsPage() {
  return (
    <MeetupDetail
      image="https://www.wissenschaft.de/wp-content/uploads/i/S/iStock-973113474-1.jpg"
      title="A first Meetup"
      address="Some Street 6, some city "
      description="The Meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://www.wissenschaft.de/wp-content/uploads/i/S/iStock-973113474-1.jpg",
        id: meetupId,
        title: "A first Meetup",
        address: "Some Street 6, some city ",
        description: "The Meetup description",
      },
    },
  };
}

export default MeetupDetailsPage;
