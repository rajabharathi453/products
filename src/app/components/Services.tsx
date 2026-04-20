import { Palette, Globe, Megaphone, Package, Layers, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Logos, illustrations, infographics, social media graphics, and all visual content you need.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      image: 'https://images.unsplash.com/photo-1756723903184-32fed816ea5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGdyYXBoaWMlMjBkZXNpZ24lMjB3b3Jrc3BhY2UlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzM2OTA3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Social Media Graphics']
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Beautiful, responsive websites and landing pages that convert visitors into customers.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      image: 'https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NzM2OTA3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Landing Pages', 'E-commerce', 'UI/UX Design', 'Web Applications']
    },
    {
      icon: Megaphone,
      title: 'Marketing Design',
      description: 'Eye-catching marketing materials that boost your campaigns and drive engagement.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      image: 'https://images.unsplash.com/photo-1547621008-d6d6d2e28e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc29jaWFsJTIwbWVkaWElMjBkZXNpZ258ZW58MXx8fHwxNzczNjkwNzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Ad Campaigns', 'Email Templates', 'Banners', 'Flyers & Brochures']
    },
    {
      icon: Package,
      title: 'Branding',
      description: 'Complete brand identity packages that make your business stand out from the crowd.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      image: 'https://images.unsplash.com/photo-1752134594179-749457f5e422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMG1vY2t1cCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM2OTA3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Brand Strategy', 'Style Guides', 'Business Cards', 'Packaging Design']
    },
    {
      icon: Layers,
      title: 'Template Library',
      description: 'Access thousands of ready-to-use templates for instant customization and deployment.',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
      image: 'https://images.unsplash.com/photo-1772037440731-c37818735b5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMGdyYWRpZW50JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzM2MjkwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['10,000+ Templates', 'Easy Customization', 'All File Formats', 'Regular Updates']
    },
    {
      icon: Sparkles,
      title: 'Custom Services',
      description: 'Need something unique? Our expert designers create custom solutions tailored to your needs.',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      image: 'https://images.unsplash.com/photo-1742440710136-1976b1cad864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwZGVzaWdufGVufDF8fHx8MTc3MzY1NTQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Dedicated Designer', 'Unlimited Revisions', 'Fast Turnaround', 'Priority Support']
    }
  ];

  return (
    <div id="services" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-purple-200 mb-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-bold text-purple-900 tracking-wider uppercase">Services</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need,{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              All in One Place
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From templates to custom designs, we've got all your creative needs covered with professional quality and lightning-fast delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </div>
              
              <div className="p-6">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color}`}></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
