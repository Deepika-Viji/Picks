import Aos from 'aos';
import React, { useEffect } from 'react'

const FadeAnimations = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000,
          once: true,
          easing: 'ease-in-out',
        });
      }, [])
  return (
    <div className="col-12">
        <div className="panel">
            <div className="panel-header">
                <h5>Fade Animation</h5>
            </div>
            <div className="panel-body">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Fade Up
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>fade-up<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="fade-up">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Fade Down
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>fade-down<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="fade-down">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Fade Right
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>fade-right<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="fade-right">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Fade Left
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>fade-left<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="fade-left">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Fade Up Right
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>fade-up-right<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="fade-up-right">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Fade Up Left
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>fade-up-left<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="fade-up-left">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Fade Down Right
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>fade-down-right<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="fade-down-right">
                                    <img src="src/assets/images/animation-card.png" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Fade Down Left
                            </div>
                            <div className="card-body animation-card">
                                <div className="bg-primary-subtle p-1 mb-15 rounded">
                                    <pre className="language-markup"><code className="language-markup"><span className="tag"><span className="tag"><span className="punctuation">&lt;</span>div</span> <span className="attr-name">data-aos</span><span className="attr-value"><span className="punctuation attr-equals">=</span><span className="punctuation">"</span>fade-down-left<span className="punctuation">"</span></span><span className="punctuation">&gt;</span></span><span className="tag"><span className="tag"><span className="punctuation">&lt;/</span>div</span><span className="punctuation">&gt;</span></span></code></pre>
                                </div>
                                <div className="text-center" data-aos="fade-down-left">
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

export default FadeAnimations