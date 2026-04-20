import { Clock, Users, Zap, Shield, Download, Headphones } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Clock,
      title: '24-48 Hour Delivery',
      description: 'Fast turnaround times without compromising on quality. Get your designs when you need them.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Dedicated Design Team',
      description: 'Work with experienced designers who understand your vision and brand.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Unlimited Revisions',
      description: 'We work until you\'re 100% satisfied. No questions asked, no extra charges.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Copyright & Ownership',
      description: 'You own all rights to the final designs. Full commercial usage rights included.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Download,
      title: 'All File Formats',
      description: 'Receive your designs in any format you need - PNG, JPG, SVG, PDF, AI, PSD, and more.',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Headphones,
      title: 'Priority Support',
      description: 'Get help whenever you need it with our responsive customer support team.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full border border-purple-200 mb-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-bold text-purple-900 tracking-wider uppercase">Features</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              DesignHub
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine speed, quality, and flexibility to give you the best design experience possible.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative gradient */}
              <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${feature.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
