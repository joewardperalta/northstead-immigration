import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import MainHeadline from "@/components/MainHeadline";
import Title from "@/components/typography/Title";
import SubTitle from "@/components/typography/SubTitle";
import Headline from "@/components/Headline";
import Heading from "@/components/typography/Heading";
import SubHeading from "@/components/typography/SubHeading";
import Photo from "@/components/Photo";
import TestimonialCard from "@/components/TestimonialCard";
import PrimaryCallToActionButton from "@/components/buttons/PrimaryCallToActionButton";

// Data
import members from "@/data/members.json";
import testimonies from "@/data/testimonies.json";
import TeamMemberCard from "@/components/TeamMemberCard";

export default function About() {
  return (
    <main>
      <Section className="pt-[8rem] md:pt-[8rem]">
        <Wrapper className="lg:flex lg:items-center lg:gap-[5rem]">
          <MainHeadline className="mx-auto">
            <Title className="text-center">About us</Title>
            <SubTitle className="text-center">
              Discover our mission and meet the dedicated team committed to
              driving your success.
            </SubTitle>
          </MainHeadline>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper className="lg:flex lg:items-center lg:gap-[5rem]">
          <Headline className="mb-0 w-full lg:mb-0">
            <Heading>Our mission</Heading>
            <SubHeading>
              Our mission is to provide expert immigration advice and
              representation with integrity and empathy. We believe in
              empowering our clients by simplifying the immigration process and
              offering transparent, honest service. We are committed to
              upholding the highest standards of professional conduct and
              ethical practice.
            </SubHeading>
          </Headline>

          <div className="w-full overflow-hidden rounded-xl sm:h-[30rem] lg:h-[35rem]">
            <Photo
              className="object-top"
              src="/immigration-guidance.jpg"
              alt="Joy Villanueva consultant wearing a formal attire."
              width={600}
              height={600}
            />
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper className="lg:flex lg:flex-row-reverse lg:items-center lg:gap-[5rem]">
          <Headline className="mb-0 w-full lg:mb-0">
            <Heading>Our story</Heading>
            <SubHeading>
              Founded by Joy Villanueva, a licensed immigration consultant. Our
              agency was created to simplify what can often feel like a complex
              and overwhelming process. We believe immigration is more than
              paperwork, it&apos;s about building new beginnings, opportunities,
              and brighter futures. Over the years, we have successfully
              supported caregivers, students, workers, and families in achieving
              their Canadian dreams.
            </SubHeading>
          </Headline>

          <div className="w-full overflow-hidden rounded-xl sm:h-[30rem] lg:h-[35rem]">
            <Photo
              className="object-top"
              src="/immigration-consultant-casual.jpg"
              alt="Joy Villanueva consultant wearing a formal attire."
              width={600}
              height={600}
            />
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Headline className="">
            <Heading className="mx-auto text-center">
              Meet our dedicated team
            </Heading>
          </Headline>

          <ul className="grid grid-cols-1 gap-x-[2rem] gap-y-[2rem] sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <li key={member.id}>
                <TeamMemberCard
                  photo={member.photo}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  contacts={member.contacts}
                />
              </li>
            ))}
          </ul>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Headline className="text-center">
            <Heading className="mx-auto">
              Amazing stories of our recent clients
            </Heading>
          </Headline>

          <ul className="sm:grid-cols-2x grid grid-cols-1 gap-[1rem] sm:grid-cols-2 lg:grid-cols-3">
            {testimonies.map((testimony, index) => (
              <li key={index}>
                <TestimonialCard
                  quote={testimony.quote}
                  author={testimony.author}
                  role={testimony.role}
                />
              </li>
            ))}
          </ul>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper className="text-center sm:text-left lg:flex lg:items-center lg:gap-[5rem]">
          <Headline className="mb-0 w-full lg:mb-0">
            <Heading>
              Start your Canadian immigration journey with expert guidance
            </Heading>
            <SubHeading className="mb-[1.5rem] sm:mb-[2rem]">
              Book a consultation and let&apos;s create a clear plan for your
              work, study, or PR pathway.
            </SubHeading>
            <PrimaryCallToActionButton
              className="mx-auto sm:mx-0"
              navigateTo="/booking"
            >
              Book a consultation
            </PrimaryCallToActionButton>
          </Headline>

          <div className="w-full overflow-hidden rounded-xl sm:h-[30rem] lg:h-[35rem]">
            <Photo
              src="/immigration-consultant-smile.jpg"
              alt="Immigration consultant looking at the camera with a big smile."
              width={600}
              height={600}
            />
          </div>
        </Wrapper>
      </Section>
    </main>
  );
}
