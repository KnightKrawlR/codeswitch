import { Button } from "@/components/ui/button";
import { ExternalLink, Music, Github } from "lucide-react";
import { APP_LOGO } from "@/const";

export default function Home() {
  const eps = [
    {
      id: 1,
      title: "Discovery",
      subtitle: "Finding the idea and the voice",
      phase: "Phase 1",
      releaseDate: "September 2020",
      status: "released",
      accentColor: "accent", // green
      description: "The exploration phase where Yinka Diz began to find his voice and vision. Discovery marks the beginning of the CodeSwitch journey, establishing the foundation for what would become a four-part musical exploration of identity, ambition, and purpose.",
      tracks: [
        "Breathe ft. Concrete",
        "And more..."
      ],
      coverImage: "/discovery-cover.jpg",
      bandcampUrl: "https://yinka.bandcamp.com/album/discovery"
    },
    {
      id: 2,
      title: "(By) DESIGN",
      subtitle: "Shaping the vision into something tangible",
      phase: "Phase 2",
      releaseDate: "September 29, 2025",
      status: "released",
      accentColor: "primary", // cyan
      description: "As the 'Design' branch of this musical code, EP #2 explores the intentional architecture of both the art and the artist. From the opening drive of 'Road 2 Riches' to the collaborative victory lap of 'The Winner,' the project underscores that every chapter of his story — and every bar he spits — exists with purpose: nothing by accident, everything by design.",
      tracks: [
        "Road 2 Riches",
        "God Willin'",
        "Ribbon in the Sky",
        "Survivor's Guilt",
        "The Winner feat. BIG BENZ & Lalo Lloyd"
      ],
      coverImage: "/by-design-cover.jpg",
      bandcampUrl: "https://yinka.bandcamp.com/album/by-design-2"
    },
    {
      id: 3,
      title: "Development",
      subtitle: "Building the foundation, testing limits",
      phase: "Phase 3",
      releaseDate: "Coming Soon",
      status: "upcoming",
      accentColor: "secondary", // purple
      description: "The construction phase where ideas are built, tested, and refined. Development represents the hard work of turning vision into reality, pushing boundaries and testing limits.",
      tracks: [],
      coverImage: "/development-cover.jpg",
      bandcampUrl: null
    },
    {
      id: 4,
      title: "Delivery",
      subtitle: "Releasing the finished product to the world",
      phase: "Phase 4",
      releaseDate: "Coming Soon",
      status: "upcoming",
      accentColor: "destructive", // orange/red
      description: "The final phase where the complete work is delivered to the world. Delivery represents the culmination of the entire CodeSwitch journey, bringing together all the elements from Discovery, Design, and Development.",
      tracks: [],
      coverImage: "/delivery-cover.jpg",
      bandcampUrl: null
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        
        <div className="container relative z-10 text-center py-20">
          <div className="mb-6">
            <span className="font-mono text-primary text-sm tracking-wider">$ git checkout main</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-glow-cyan">
            CodeSwitch
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A Four-EP Journey Through the Software Development Lifecycle
          </p>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
            by <span className="text-primary font-semibold">Yinka Diz</span>
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => scrollToSection('concept')}
            >
              Explore the Concept
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2"
              asChild
            >
              <a href="https://yinka.bandcamp.com" target="_blank" rel="noopener noreferrer">
                <Music className="w-4 h-4" />
                Listen on Bandcamp
              </a>
            </Button>
          </div>

          {/* Branch Visualization Preview */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
              {eps.map((ep, index) => (
                <div key={ep.id} className="flex items-center">
                  <button
                    onClick={() => scrollToSection(`ep-${ep.id}`)}
                    className={`
                      w-12 h-12 md:w-16 md:h-16 rounded-full 
                      border-2 
                      ${ep.accentColor === 'primary' ? 'border-primary' : ''}
                      ${ep.accentColor === 'secondary' ? 'border-secondary' : ''}
                      ${ep.accentColor === 'accent' ? 'border-accent' : ''}
                      ${ep.accentColor === 'destructive' ? 'border-destructive' : ''}
                      bg-card 
                      flex items-center justify-center
                      transition-all duration-300
                      ${ep.status === 'released' ? 'glow-cyan hover:glow-cyan' : 'opacity-60'}
                    `}
                  >
                    <span className={`font-mono text-xs md:text-sm ${
                      ep.accentColor === 'primary' ? 'text-primary' : ''
                    }${
                      ep.accentColor === 'secondary' ? 'text-secondary' : ''
                    }${
                      ep.accentColor === 'accent' ? 'text-accent' : ''
                    }${
                      ep.accentColor === 'destructive' ? 'text-destructive' : ''
                    }`}>
                      {ep.phase.replace('Phase ', '')}
                    </span>
                  </button>
                  {index < eps.length - 1 && (
                    <div className="w-8 md:w-16 h-0.5 bg-primary/30"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 font-mono text-xs text-muted-foreground">
              Discovery → Design → Development → Delivery
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-20 md:py-32 relative">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Code Metaphor */}
              <div className="floating-card p-8 rounded-lg">
                <div className="font-mono text-sm mb-4 text-primary">
                  <span className="text-muted-foreground">// The Technical Story</span>
                </div>
                <pre className="text-sm overflow-x-auto">
                  <code className="text-accent">{`git branch --list
* main
  discovery
  design
  development
  delivery

git log --oneline
a1b2c3d Delivery: Release
d4e5f6g Development: Build
g7h8i9j Design: Blueprint
j0k1l2m Discovery: Explore`}</code>
                </pre>
                <p className="mt-6 text-foreground/80">
                  The literal act of branching and merging code — a parallel to the software development lifecycle.
                </p>
              </div>

              {/* Right: Cultural Metaphor */}
              <div className="floating-card p-8 rounded-lg">
                <div className="font-mono text-sm mb-4 text-secondary">
                  <span className="text-muted-foreground">// The Cultural Story</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">The Dual Meaning</h3>
                <p className="text-foreground/80 mb-4">
                  <strong className="text-primary">CodeSwitch</strong> speaks to the cultural and personal act of "codeswitching" — navigating different worlds and adapting to different spaces as an artist, son, friend, and hustler.
                </p>
                <p className="text-foreground/80">
                  Each EP uncovers a different facet of Yinka: his ambitions, doubts, resilience, and triumphs — showing how those layers interconnect to build the person behind the music.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <blockquote className="text-2xl md:text-3xl font-bold text-primary text-glow-cyan">
                "Nothing by accident, everything by design."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* EP Sections */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-32">
            {eps.map((ep, index) => (
              <div 
                key={ep.id} 
                id={`ep-${ep.id}`}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* EP Image/Placeholder */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="floating-card rounded-lg overflow-hidden aspect-square">
                    {ep.coverImage ? (
                      <img 
                        src={ep.coverImage} 
                        alt={`${ep.title} cover`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-card">
                        <div className="text-center">
                          <div className={`text-6xl font-bold mb-4 ${
                            ep.accentColor === 'primary' ? 'text-primary' : ''
                          }${
                            ep.accentColor === 'secondary' ? 'text-secondary' : ''
                          }${
                            ep.accentColor === 'accent' ? 'text-accent' : ''
                          }${
                            ep.accentColor === 'destructive' ? 'text-destructive' : ''
                          }`}>
                            {ep.phase}
                          </div>
                          <div className="text-muted-foreground font-mono">
                            {ep.status === 'upcoming' ? 'Coming Soon' : 'Released'}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* EP Details */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="mb-4">
                    <span className={`font-mono text-sm ${
                      ep.accentColor === 'primary' ? 'text-primary' : ''
                    }${
                      ep.accentColor === 'secondary' ? 'text-secondary' : ''
                    }${
                      ep.accentColor === 'accent' ? 'text-accent' : ''
                    }${
                      ep.accentColor === 'destructive' ? 'text-destructive' : ''
                    }`}>
                      {ep.phase} // {ep.releaseDate}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    {ep.title}
                  </h2>
                  
                  <p className="text-xl text-muted-foreground mb-6">
                    {ep.subtitle}
                  </p>
                  
                  <p className="text-foreground/80 mb-8">
                    {ep.description}
                  </p>

                  {ep.tracks.length > 0 && (
                    <div className="mb-8">
                      <h4 className="font-mono text-sm text-muted-foreground mb-3">
                        TRACKLIST
                      </h4>
                      <ul className="space-y-2">
                        {ep.tracks.map((track, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className={`font-mono text-sm mt-0.5 ${
                              ep.accentColor === 'primary' ? 'text-primary' : ''
                            }${
                              ep.accentColor === 'secondary' ? 'text-secondary' : ''
                            }${
                              ep.accentColor === 'accent' ? 'text-accent' : ''
                            }${
                              ep.accentColor === 'destructive' ? 'text-destructive' : ''
                            }`}>
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="text-foreground/90">{track}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {ep.bandcampUrl && (
                    <Button 
                      className="gap-2"
                      asChild
                    >
                      <a href={ep.bandcampUrl} target="_blank" rel="noopener noreferrer">
                        <Music className="w-4 h-4" />
                        Listen Now
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/artist-photo.jpg" 
                  alt="Yinka Diz"
                  className="rounded-lg floating-card w-full"
                />
              </div>
              
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  About Yinka Diz
                </h2>
                
                <p className="text-foreground/80 mb-4">
                  Washington, D.C. based hip-hop artist Yinka Diz brings a unique perspective to the genre, merging tech-driven concepts with deeply personal storytelling.
                </p>
                
                <p className="text-foreground/80 mb-6">
                  Through the CodeSwitch series, Yinka explores how identity and experiences are designed and refined through trial, conflict, and purpose — revealing the intentional architecture behind both the art and the artist.
                </p>

                <div className="space-y-2 mb-8">
                  <div className="font-mono text-sm">
                    <span className="text-muted-foreground">Label:</span>{" "}
                    <span className="text-primary">New Money Music Group</span>
                  </div>
                  <div className="font-mono text-sm">
                    <span className="text-muted-foreground">Producer:</span>{" "}
                    <span className="text-foreground">Kofi Cooks</span>
                  </div>
                  <div className="font-mono text-sm">
                    <span className="text-muted-foreground">Mix & Master:</span>{" "}
                    <span className="text-foreground">Adam Lewis</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://yinka.bandcamp.com" target="_blank" rel="noopener noreferrer">
                      <Music className="w-4 h-4 mr-2" />
                      Bandcamp
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://linktr.ee" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Links
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/20">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <p className="text-2xl font-bold text-primary mb-2">CodeSwitch</p>
              <p className="text-sm text-muted-foreground font-mono">
                Discovery → Design → Development → Delivery
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              © {new Date().getFullYear()} New Money Music Group. All Rights Reserved.
            </p>
            
            <p className="text-xs text-primary font-mono">
              Nothing by accident, everything by design.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
