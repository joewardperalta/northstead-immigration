import PrimaryCallToActionButton from "@/components/buttons/PrimaryCallToActionButton";
import SecondaryCallToActionButton from "@/components/buttons/SecondaryCallToActionButton";
import Heading from "@/components/typography/Heading";
import SubTitle from "@/components/typography/SubTitle";
import Title from "@/components/typography/Title";
import Wrapper from "@/components/Wrapper";
import Photo from "@/components/Photo";
import SubHeading from "@/components/typography/SubHeading";
import Headline from "@/Headline";
import MainHeadline from "@/components/MainHeadline";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main>
      <Section className="pt-[8rem]">
        <Wrapper className="lg:flex lg:items-center">
          <MainHeadline className="mb-[2rem] text-center md:mb-[3rem] md:text-start lg:pr-[7rem]">
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

          <div className="w-full lg:h-[35rem] lg:min-w-[30rem]">
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
    </main>
  );
}
