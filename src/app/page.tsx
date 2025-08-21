import Badge from "@/components/Badge";
import PrimaryCallToActionButton from "@/components/buttons/PrimaryCallToActionButton";
import SecondaryCallToActionButton from "@/components/buttons/SecondaryCallToActionButton";
import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";

export default function Home() {
  return (
    <main>
      <section className="h-dvh">
        {/* Background overlay */}
        <div className="absolute left-0 top-0 h-full w-full bg-gray-950/60 -z-10"></div>

        {/* Background video */}
        <video
          className="absolute left-0 top-0 h-full object-cover -z-20"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="/videos/19504779-hd_1920_1080_60fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Main content */}
        <div className="max-w-[1440px] h-full flex items-end mx-auto px-6 py-14">
          <div className="h-fit">
            <Badge className="mb-4 mx-auto">
              Based in Toronto, Ontario, Canada
            </Badge>

            {/* Headline */}
            <div className="text-center">
              <Title>Your trusted partner in Canadian immigration</Title>
              <Paragraph>
                Expert RCIC-led guidance for work permits, permanent residency,
                study visas, and family sponsorships — with personalized support
                for Filipino applicants.
              </Paragraph>

              <div className="flex flex-col items-center gap-4 mt-8">
                <PrimaryCallToActionButton navigateTo="/booking">
                  Book a consultation
                </PrimaryCallToActionButton>
                <SecondaryCallToActionButton navigateTo="/services">
                  Explore services
                </SecondaryCallToActionButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
