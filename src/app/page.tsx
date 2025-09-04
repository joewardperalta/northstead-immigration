import PrimaryCallToActionButton from "@/components/buttons/PrimaryCallToActionButton";
import SecondaryCallToActionButton from "@/components/buttons/SecondaryCallToActionButton";
import Heading from "@/components/typography/Heading";
import SubTitle from "@/components/typography/SubTitle";
import Title from "@/components/typography/Title";
import Wrapper from "@/components/Wrapper";
import Photo from "@/components/Photo";
import SubHeading from "@/components/typography/SubHeading";
import Headline from "@/components/Headline";
import MainHeadline from "@/components/MainHeadline";
import Section from "@/components/Section";
import BenefitCard from "@/components/BenefitCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessCard from "@/components/ProcessCard";

// data
import benefits from "@/data/benefits.json";
import services from "@/data/services.json";
import processes from "@/data/processes.json";
import testimonies from "@/data/testimonies.json";

export default function Home() {
  return (
    <main>
      <Section className="pt-[8rem] md:pt-[8rem]">
        <Wrapper className="lg:flex lg:items-center lg:gap-[5rem]">
          <MainHeadline className="mb-[2rem] w-full text-center md:mb-[3rem] md:text-start lg:mb-0">
            <Title>Expert immigration consultant</Title>
            <SubTitle>
              RCIC-led guidance for work permits, permanent residency, study
              visas, and family sponsorships — with personalized support for
              Filipino applicants.
            </SubTitle>

            {/* Call to action */}
            <div className="flex flex-col items-center gap-[0.8rem] md:flex-row md:gap-[1rem]">
              <PrimaryCallToActionButton navigateTo="/booking">
                Book a consultation
              </PrimaryCallToActionButton>
              <SecondaryCallToActionButton navigateTo="/services">
                Explore services
              </SecondaryCallToActionButton>
            </div>
          </MainHeadline>

          <div className="w-full overflow-hidden rounded-xl lg:h-[35rem]">
            <Photo
              className="object-top"
              src="/immigration-consultant-potrait.jpg"
              alt="Joy Villanueva consultant wearing a formal attire."
              width={600}
              height={600}
            />
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Headline className="w-full lg:flex lg:justify-between lg:gap-[5rem]">
            <Heading className="">
              Trusted by hundreds of newcomers to Canada
            </Heading>

            <div className="w-full">
              <SubHeading>
                Northstead Immigration Inc. is committed to helping individuals,
                families, and caregivers successfully navigate Canada’s
                immigration system with confidence and clarity.
              </SubHeading>

              <SecondaryCallToActionButton navigateTo="/services">
                Learn more about us
              </SecondaryCallToActionButton>
            </div>
          </Headline>

          {/* Gallery */}
          <div className="md:flex md:gap-[1rem]">
            <div className="w-full overflow-hidden rounded-xl">
              <Photo
                src="/airport.png"
                alt="Joy Villanueva consultant wearing a formal attire."
                width={600}
                height={600}
              />
            </div>
            <div className="hidden w-full overflow-hidden rounded-xl md:block">
              <Photo
                src="/canadaflag.png"
                alt="Joy Villanueva consultant wearing a formal attire."
                width={600}
                height={600}
              />
            </div>
            <div className="hidden w-full overflow-hidden rounded-xl lg:block">
              <Photo
                src="/consultation.png"
                alt="Joy Villanueva consultant wearing a formal attire."
                width={600}
                height={600}
              />
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Headline className="mx-auto max-w-[30rem] text-center">
            <Heading>Why choose us</Heading>
            <SubHeading>
              Choosing the right immigration partner can make all the
              difference. Here&apos;s why clients trusts us:
            </SubHeading>
          </Headline>

          <div className="grid grid-cols-1 gap-x-[4rem] gap-y-[2rem] sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Headline className="mx-auto max-w-[30rem] text-center">
            <Heading>Our services</Heading>
            <SubHeading>
              We provide a wide range of immigration services tailored to meet
              your unique needs
            </SubHeading>
          </Headline>

          <div className="grid grid-cols-1 gap-x-[2rem] gap-y-[3rem] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                photo={service.photo}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper className="lg:flex lg:items-center lg:gap-[5rem]">
          <div className="w-full">
            <Headline className="text-center lg:text-left">
              <Heading>Our step-by-step process</Heading>
            </Headline>

            <div className="mb-[2rem] w-full overflow-hidden rounded-xl lg:hidden">
              <Photo
                className="hidden sm:block"
                src="/process.jpg"
                alt="Document processing."
                width={600}
                height={600}
              />
            </div>

            <div className="grid grid-cols-1 gap-x-[4rem] gap-y-[2rem] text-center sm:grid-cols-2 sm:text-left">
              {processes.map((process, index) => (
                <ProcessCard
                  key={index}
                  title={process.title}
                  description={process.description}
                  step={index + 1}
                />
              ))}
            </div>
          </div>

          <div className="mb-[2rem] hidden w-full overflow-hidden rounded-xl lg:block lg:h-[35rem]">
            <Photo
              className="hidden sm:block"
              src="/process.jpg"
              alt="Document processing."
              width={600}
              height={600}
            />
          </div>
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
    </main>
  );
}
