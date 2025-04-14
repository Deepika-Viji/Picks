import Aos from 'aos';
import React, { useEffect } from 'react';
const FlipAnimations = () => {
    useEffect(() => {
        // Initialize AOS library
        Aos.init({
          duration: 500, // Animation duration in milliseconds
          once: true, // Only animate elements once
        });
    
        // Clean up AOS library on component unmount
        return () => {
          Aos.refresh(); // Refresh AOS library to remove applied animations
        };
      }, []);
  return (
    <div className="col-12">
        <div className="panel">
            <div className="panel-header">
                <h5>Flip Animation</h5>
            </div>
            <div className="panel-body">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Flip Left
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>flip-left<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="flip-left">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Flip Right
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>flip-right<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="flip-right">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Flip Up
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>flip-up<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="flip-up">
                                    <img src="src/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Flip Down
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>flip-down<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="flip-down">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlipAnimations