import Badge from "@/components/Badge";
import PrimaryCallToActionButton from "@/components/buttons/PrimaryCallToActionButton";
import SecondaryCallToActionButton from "@/components/buttons/SecondaryCallToActionButton";
import SubTitle from "@/components/typography/SubTitle";
import Title from "@/components/typography/Title";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main>
      <section className="h-dvh">
        <Wrapper className="h-full flex items-end">
          {/* Background overlay */}
          <div className="absolute left-0 top-0 h-full w-full bg-gray-950/60 -z-10"></div>

          {/* Background video */}
          <video
            className="absolute left-0 top-0 h-full w-full object-cover -z-20"
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
            <Badge>Based in Toronto, Ontario, Canada</Badge>

            {/* Headline */}
            <div className="text-center md:text-left">
              <Title className="md:max-w-[872px]">
                Your trusted partner in Canadian immigration
              </Title>
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
                <SecondaryCallToActionButton navigateTo="/services">
                  Explore services
                </SecondaryCallToActionButton>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
