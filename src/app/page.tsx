import Badge from "@/components/Badge";
import PrimaryCallToActionButton from "@/components/buttons/PrimaryCallToActionButton";
import SecondaryCallToActionButton from "@/components/buttons/SecondaryCallToActionButton";
import Heading from "@/components/typography/Heading";
import Paragraph from "@/components/typography/Paragraph";
import SubTitle from "@/components/typography/SubTitle";
import Title from "@/components/typography/Title";
import Wrapper from "@/components/Wrapper";
import Photo from "@/components/Photo";
import SubHeading from "@/components/typography/SubHeading";

export default function Home() {
  return (
    <main>
      <section className="relative pt-48 sm:pt-52 md:pt-56">
        <Wrapper className="flex h-full items-end">
          {/* Background overlay */}
          <div className="absolute top-0 left-0 -z-10 h-full w-full bg-gray-950/60"></div>

          {/* Background video */}
          <video
            className="absolute top-0 left-0 -z-20 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source
              src="/videos/19504779-hd_1920_1080_60fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Main content */}
          <div>
            <Badge className="mx-auto md:mx-0">
              Based in Toronto, Ontario, Canada
            </Badge>

            {/* Headline */}
            <div className="text-center md:text-left">
              <Title>Your trusted partner in Canadian immigration</Title>
              <SubTitle>
                Expert RCIC-led guidance for work permits, permanent residency,
                study visas, and family sponsorships — with personalized support
                for Filipino applicants.
              </SubTitle>

              {/* Call to action */}
              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                <PrimaryCallToActionButton navigateTo="/booking">
                  Book a consultation
                </PrimaryCallToActionButton>
                <SecondaryCallToActionButton
                  className="text-secondary"
                  navigateTo="/services"
                >
                  Explore services
                </SecondaryCallToActionButton>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section>
        <Wrapper className="space-y-8">
          {/* Headline */}
          <div className="lg:flex lg:justify-between lg:gap-16">
            <Heading>Trusted by hundreds of newcomers to Canada</Heading>

            <div className="space-y-5">
              <SubHeading>
                We are committed to helping individuals, families, and
                caregivers successfully navigate Canada&apos;s immigration
                system with confidence and clarity.
              </SubHeading>
              <SecondaryCallToActionButton navigateTo="/about">
                More about us
              </SecondaryCallToActionButton>
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-12 gap-4 [&>*]:nth-[2]:hidden [&>*]:nth-[3]:hidden lg:[&>*]:nth-[2]:block lg:[&>*]:nth-[3]:block">
            <div className="col-span-12 lg:col-span-4">
              <Photo
                src="/airport.png"
                alt="Two couple wearing red formal dress inside the airport."
                width={600}
                height={600}
              />
            </div>

            <div className="col-span-3">
              <Photo
                src="/canadaflag.png"
                alt="Canadian flag"
                width={600}
                height={600}
              />
            </div>

            <div className="col-span-5">
              <Photo
                src="/consultation.png"
                alt="Two couple wearing red formal dress inside the airport."
                width={600}
                height={600}
              />
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
