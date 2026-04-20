import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Brand',
      category: 'Branding & Web Design',
      image: 'https://images.unsplash.com/photo-1752134594179-749457f5e422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMG1vY2t1cCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM2OTA3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tech Startup',
      category: 'Web Design & Marketing',
      image: 'https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NzM2OTA3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Marketing Campaign',
      category: 'Social Media & Ads',
      image: 'https://images.unsplash.com/photo-1547621008-d6d6d2e28e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc29jaWFsJTIwbWVkaWElMjBkZXNpZ258ZW58MXx8fHwxNzczNjkwNzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Creative Studio',
      category: 'Graphic Design & Branding',
      image: 'https://images.unsplash.com/photo-1756723903184-32fed816ea5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGdyYXBoaWMlMjBkZXNpZ24lMjB3b3Jrc3BhY2UlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzM2OTA3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Modern Agency',
      category: 'UI/UX & Web Design',
      image: 'https://images.unsplash.com/photo-1772037440731-c37818735b5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMGdyYWRpZW50JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzM2MjkwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Team Collaboration',
      category: 'Custom Design Services',
      image: 'https://images.unsplash.com/photo-1742440710136-1976b1cad864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwZGVzaWdufGVufDF8fHx8MTc3MzY1NTQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div id="portfolio" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-purple-200 mb-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-bold text-purple-900 tracking-wider uppercase">Portfolio</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Recent{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses transform their visual identity and grow their brand.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-bold">View Project</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-sm font-medium text-purple-600 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
}
