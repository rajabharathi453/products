import { Check, Sparkles, Star, Crown } from 'lucide-react';
import svgPaths from "../../imports/svg-fweu7d1ivh";

export function Pricing() {
  const plans = [
    {
      name: 'Template Library',
      icon: Sparkles,
      price: '29',
      period: 'month',
      description: 'Perfect for individuals and small businesses',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      popular: false,
      features: [
        'Access to 10,000+ templates',
        'All file formats (PNG, SVG, PDF)',
        'Commercial license included',
        'Regular template updates',
        'Basic customization tools',
        'Email support'
      ]
    },
    {
      name: 'Pro Designer',
      icon: Star,
      price: '99',
      period: 'month',
      description: 'For growing teams and agencies',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-400',
      popular: true,
      features: [
        'Everything in Template Library',
        '20 custom design requests/month',
        '24-48 hour turnaround',
        'Unlimited revisions',
        'Dedicated designer',
        'Priority support',
        'Brand kit creation',
        'Source files included'
      ]
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: '299',
      period: 'month',
      description: 'For large teams with high-volume needs',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      popular: false,
      features: [
        'Everything in Pro Designer',
        'Unlimited custom design requests',
        '12-24 hour turnaround',
        'Dedicated design team',
        'Account manager',
        '24/7 priority support',
        'Custom brand guidelines',
        'White-label options',
        'API access'
      ]
    }
  ];

  return (
    <div id="pricing" className="bg-gradient-to-br from-gray-50 to-purple-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-purple-200 mb-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-bold text-purple-900 tracking-wider uppercase">Pricing</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple,{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 border-2 ${
                plan.popular ? 'border-blue-400 shadow-2xl scale-105' : plan.borderColor
              } hover:shadow-2xl transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} mb-6`}>
                <plan.icon className="w-8 h-8 text-white" />
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600">
                    /{plan.period}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-medium transition-all duration-300 mb-8 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-xl'
                    : `bg-gradient-to-r ${plan.color} text-white hover:shadow-xl`
                }`}
              >
                Get Started
                <svg className="w-4 h-4" fill="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p2bbdda00} stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`p-1 rounded-full bg-gradient-to-br ${plan.color} mt-0.5 flex-shrink-0`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include a <span className="font-bold text-purple-600">14-day free trial</span>. No credit card required.
          </p>
          <p className="text-gray-600">
            Need a custom plan? <a href="#contact" className="text-purple-600 font-bold hover:underline">Contact us</a> for enterprise solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
