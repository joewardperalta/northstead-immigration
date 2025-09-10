import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import MainHeadline from "@/components/MainHeadline";
import Title from "@/components/typography/Title";
import SubTitle from "@/components/typography/SubTitle";
import Headline from "@/components/Headline";
import Heading from "@/components/typography/Heading";
import SubHeading from "@/components/typography/SubHeading";
import Photo from "@/components/Photo";
import Phone from "@/components/icons/Phone";
import Mail from "@/components/icons/Mail";
import Paragraph from "@/components/typography/Paragraph";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import PrimaryCallToActionButton from "@/components/buttons/PrimaryCallToActionButton";

// Data
import members from "@/data/members.json";
import testimonies from "@/data/testimonies.json";

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
                <article className="rounded-xl border border-black px-[2rem] py-[3rem]">
                  <div className="mx-auto mb-[1rem] h-[6rem] w-[6rem] overflow-hidden rounded-full">
                    <Photo
                      className="object-top"
                      src={member.photo.src}
                      alt={member.photo.alt}
                      width={300}
                      height={300}
                    />
                  </div>

                  <div className="space-y-[1rem]">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="mb-[0.5rem] font-medium">{member.role}</p>
                      <Paragraph>{member.bio}</Paragraph>
                    </div>

                    <ul className="flex justify-center gap-[1rem]">
                      {member.contacts.map((contact, index) => (
                        <li className="h-[1.1rem] w-[1.1rem]" key={index}>
                          <Link
                            href={
                              contact.icon === "phone"
                                ? `tel:${contact.link}`
                                : `mailto:${contact.link}`
                            }
                          >
                            {contact.icon === "phone" ? <Phone /> : <Mail />}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
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
