import Aos from 'aos';
import React, { useEffect } from 'react';

const ZoomAnimations = () => {
    useEffect(() => {
        Aos.init({
          duration: 500,
          once: true,
        });
    
        return () => {
          Aos.refresh();
        };
      }, []);
  return (
    <div className="col-12">
        <div className="panel">
            <div className="panel-header">
                <h5>Zoom Animation</h5>
            </div>
            <div className="panel-body">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Zoom In
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>zoom-in<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="zoom-in">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Zoom In Up
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>zoom-in-up<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="zoom-in-up">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Zoom In Down
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>zoom-in-down<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="zoom-in-down">
                                    <img src="/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Zoom In Left
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>zoom-in-left<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="zoom-in-left">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Zoom In Right
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>zoom-in-right<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="zoom-in-right">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Zoom Out
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>zoom-out<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="zoom-out">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Zoom Out Up
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>zoom-out-up<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="zoom-out-up">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Zoom Out Down
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>zoom-out-down<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="zoom-out-down">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Zoom Out Left
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>zoom-out-left<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="zoom-out-left">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Zoom Out Right
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>zoom-out-right<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="zoom-out-right">
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

export default ZoomAnimations