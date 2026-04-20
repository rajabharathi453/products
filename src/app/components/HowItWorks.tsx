import { ClipboardList, MessageSquare, Rocket, CheckCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      number: '01',
      title: 'Choose Your Service',
      description: 'Browse our template library or request custom design services based on your needs.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: MessageSquare,
      number: '02',
      title: 'Share Your Vision',
      description: 'Tell us about your project, brand, and goals. Upload references and provide feedback.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Rocket,
      number: '03',
      title: 'We Create Magic',
      description: 'Our expert designers bring your vision to life with professional quality and creativity.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Receive & Revise',
      description: 'Get your designs in 24-48 hours. Request unlimited revisions until it\'s perfect.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <div id="how-it-works" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full border border-purple-200 mb-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-bold text-purple-900 tracking-wider uppercase">Process</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting professional designs has never been easier. Just four simple steps to transform your brand.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-full h-0.5 bg-gradient-to-r from-purple-200 to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                {/* Number Badge */}
                <div className="relative inline-block mb-6">
                  <div className={`${step.bgColor} w-20 h-20 rounded-full flex items-center justify-center border-4 border-white shadow-lg`}>
                    <span className={`text-2xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                      {step.number}
                    </span>
                  </div>
                  <div className={`absolute -bottom-2 -right-2 p-3 rounded-full bg-gradient-to-br ${step.color}`}>
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-200">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600">
                Join thousands of happy customers transforming their brands.
              </p>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 whitespace-nowrap">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
