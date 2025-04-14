  import React, { useContext } from 'react'
import Footer from '../components/footer/Footer'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { DigiContext } from '../context/DigiContext'

const MySwal = withReactContent(Swal)

const SweetAlertMainContent = () => {
  const {isLightTheme, isDarkTheme} = useContext(DigiContext)
    const handleButtonClick = (alertType) => {
        switch (alertType) {
          case 'saBasic':
            MySwal.fire({
              title: "Any fool can use a computer",
              confirmButtonClass: "btn btn-sm btn-primary",
              buttonsStyling: !1,
              showCloseButton: !0,
              closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
              customClass: {
                  closeButton: 'btn btn-sm btn-icon btn-danger',
              },
          })
            break;
          case 'saTitle':
            MySwal.fire({
              title: "The Internet?",
              text: "That thing is still around?",
              icon: "question",
              confirmButtonClass: "btn btn-sm btn-primary",
              buttonsStyling: !1,
              showCloseButton: !0,
              closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
              customClass: {
                  closeButton: 'btn btn-sm btn-icon btn-danger',
              },
          })
            break;
          case 'saSuccess':
            MySwal.fire({
              title: "Good job!",
              text: "You clicked the button!",
              icon: "success",
              showCancelButton: !0,
              confirmButtonClass: "btn btn-sm btn-primary",
              cancelButtonClass: "btn btn-sm btn-danger",
              buttonsStyling: !1,
              showCloseButton: !0,
              closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
              customClass: {
                  closeButton: 'btn btn-sm btn-icon btn-danger',
              },
          })
            break;
          case 'saError':
            MySwal.fire({
              title: "Oops...",
              text: "Something went wrong!",
              icon: "error",
              confirmButtonClass: "btn btn-sm btn-primary",
              buttonsStyling: !1,
              footer: '<a href="#">Why do I have this issue?</a>',
              showCloseButton: !0,
              closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
              customClass: {
                  closeButton: 'btn btn-sm btn-icon btn-danger',
              },
          })
            break;
          case 'saLongcontent':
            MySwal.fire({
              imageUrl: "https://placeholder.pics/svg/300x1500",
              imageHeight: 1500,
              imageAlt: "A tall image",
              confirmButtonClass: "btn btn-sm btn-primary",
              buttonsStyling: !1,
              showCloseButton: !0,
              closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
              customClass: {
                  closeButton: 'btn btn-sm btn-icon btn-danger',
              },
          })
            break;
          case 'saWarning':
            MySwal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: !0,
              confirmButtonClass: "btn btn-sm btn-primary",
              cancelButtonClass: "btn btn-sm btn-danger",
              confirmButtonText: "Yes, delete it!",
              buttonsStyling: !1,
              showCloseButton: !0,
              closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
              customClass: {
                  closeButton: 'btn btn-sm btn-icon btn-danger',
              },
          }).then(function(t) {
              t.value && Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                  confirmButtonClass: "btn btn-sm btn-primary",
                  buttonsStyling: !1
              })
          })
            break;
          case 'saParams':
          MySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: !0,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            confirmButtonClass: "btn btn-sm btn-primary",
            cancelButtonClass: "btn btn-sm btn-danger",
            buttonsStyling: !1,
            showCloseButton: !0,
            closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
            customClass: {
                closeButton: 'btn btn-sm btn-icon btn-danger',
            },
        }).then(function(t) {
            t.value ? Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                confirmButtonClass: "btn btn-sm btn-primary",
                buttonsStyling: !1
            }) : t.dismiss === Swal.DismissReason.cancel && Swal.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error",
                confirmButtonClass: "btn btn-sm btn-primary",
                buttonsStyling: !1
            })
        })
          break;
          // case 'saImage':
          //   MySwal.fire({
          //     title: "Sweet!",
          //     text: "Modal with a custom image.",
          //     imageUrl: "assets/images/logo-small.png",
          //     imageHeight: 40,
          //     confirmButtonClass: "btn btn-sm btn-primary",
          //     buttonsStyling: !1,
          //     animation: !1,
          //     showCloseButton: !0,
          //     closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
          //     customClass: {
          //         closeButton: 'btn btn-sm btn-icon btn-danger',
          //     },
          // })
          //   break;
          case 'saClose':
          let timerInterval
          MySwal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              MySwal.showLoading()
              const b = MySwal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = MySwal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            if (result.dismiss === MySwal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          })
            break;
          case 'customHtmlAlert':
            MySwal.fire({
              title: "<i>HTML</i> <u>example</u>",
              icon: "info",
              html: 'You can use <b>bold text</b>, <a href="#">links</a> and other HTML tags',
              showCloseButton: !0,
              showCancelButton: !0,
              confirmButtonClass: "btn btn-sm btn-success",
              cancelButtonClass: "btn btn-sm btn-danger",
              buttonsStyling: !1,
              confirmButtonText: '<i class="fa-light fa-thumbs-up"></i> Great!',
              cancelButtonText: '<i class="fa-light fa-thumbs-down"></i>',
              closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
              customClass: {
                  closeButton: 'btn btn-sm btn-icon btn-danger',
              },
          })
        break;
          case 'saDialogThreeBtn':
            MySwal.fire({
              title: "Do you want to save the changes?",
              showDenyButton: !0,
              showCancelButton: !0,
              confirmButtonText: "Save",
              confirmButtonClass: "btn btn-sm btn-success",
              cancelButtonClass: "btn btn-sm btn-danger",
              denyButtonClass: "btn btn-sm btn-info",
              buttonsStyling: !1,
              denyButtonText: "Don't save",
              showCloseButton: !0,
              closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
              customClass: {
                  closeButton: 'btn btn-sm btn-icon btn-danger',
              },
          }).then(function(t) {
              t.isConfirmed ? Swal.fire({
                  title: "Saved!",
                  icon: "success",
                  confirmButtonClass: "btn btn-sm btn-primary",
                  buttonsStyling: !1
              }) : t.isDenied && Swal.fire({
                  title: "Changes are not saved",
                  icon: "info",
                  confirmButtonClass: "btn btn-sm btn-primary",
                  buttonsStyling: !1
              })
          })
            break;
          case 'saPosition':
            MySwal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: !1,
              timer: 1500,
              showCloseButton: !0,
              closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
              customClass: {
                  closeButton: 'btn btn-sm btn-icon btn-danger',
              },
          })
            break;
          case 'customPaddingWidthAlert':
            MySwal.fire({
              title: "Custom width, padding, background.",
              width: 600,
              padding: 100,
              confirmButtonClass: "btn btn-sm btn-primary",
              buttonsStyling: false,
              background: isLightTheme
                ? "#ffffff url(assets/images/chat-bg-black.png)"
                : isDarkTheme
                ? "#242526 url(assets/images/chat-bg.png)"
                : "#112143 url(assets/images/chat-bg.png)"
            });
            break;
          case 'ajaxAlert':
              MySwal.fire({
                title: "Submit email to run ajax request",
                input: "email",
                showCancelButton: true,
                confirmButtonText: "Submit",
                showLoaderOnConfirm: true,
                confirmButtonClass: "btn btn-sm btn-primary",
                cancelButtonClass: "btn btn-sm btn-danger",
                buttonsStyling: false,
                showCloseButton: true,
                closeButtonHtml: "<i class='fa-light fa-xmark'></i>",
                customClass: {
                  closeButton: 'btn btn-sm btn-icon btn-danger',
                  input: 'form-control form-control-sm',
                },
                preConfirm: function (email) {
                  return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                      if ("taken@example.com" === email) {
                        reject("This email is already taken.");
                      } else {
                        resolve(email);
                      }
                    }, 2000); // Simulating AJAX request with a 2-second delay
                  });
                },
                allowOutsideClick: false,
              }).then(function (result) {
                Swal.fire({
                  icon: "success",
                  title: "Ajax request finished!",
                  confirmButtonClass: "btn btn-sm btn-primary",
                  buttonsStyling: false,
                  html: "Submitted email: " + result.value,
                });
              });
              break;
        default:
        break;
    }
  };
    
  return (
    <div className="main-content">
        <div className="row">
            <div className="col-12">
                <div className="panel">
                    <div className="panel-header">
                        <h5>Sweet Alert</h5>
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Alert Type</th>
                                        <th>Alert Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>A Basic Message</td>
                                        <td><button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleButtonClick('saBasic')}
                                            >
                                                Click Me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A Title with a Text Under</td>
                                        <td>
                                            <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleButtonClick('saTitle')}
                                            >                                                
                                            Click Me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A success message!</td>
                                        <td>
                                        <button
                                        className="btn btn-sm btn-primary"
                                        onClick={() => handleButtonClick('saSuccess')}
                                        >
                                                Click Me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A modal with a title, an error icon, a text, and a footer</td>
                                        <td>
                                            <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleButtonClick('saError')}
                                            >
                                                Click Me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A modal window with a long content inside</td>
                                        <td>
                                            <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleButtonClick('saLongcontent')}
                                            >
                                                Click Me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A warning message, with a function attached to the "Confirm"-button</td>
                                        <td>
                                            <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleButtonClick('saWarning')}
                                            >
                                                Click Me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>By passing a parameter, you can execute something else for "Cancel".</td>
                                        <td>
                                            <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleButtonClick('saParams')}
                                            >
                                                Click Me
                                            </button>
                                            </td>
                                    </tr>
                                    <tr>
                                        <td>A message with custom Image Header</td>
                                        <td>
                                            <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleButtonClick('saImage')}
                                            >
                                            Click Me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A message with auto close timer</td>
                                        <td>
                                            <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleButtonClick('saClose')}
                                            >
                                            Click Me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom HTML description and buttons</td>
                                        <td>
                                            <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleButtonClick('customHtmlAlert')}
                                            >
                                            Click Me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A dialog with three buttons</td>
                                        <td>
                                            <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleButtonClick('saDialogThreeBtn')}
                                            >
                                            Click Me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A custom positioned dialog</td>
                                        <td>
                                            <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleButtonClick('saPosition')}
                                            >
                                            Click Me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A message with custom width, padding and background</td>
                                        <td>
                                            <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleButtonClick('customPaddingWidthAlert')}
                                            >
                                                Click Me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ajax request example</td>
                                        <td>
                                            <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => handleButtonClick('ajaxAlert')}
                                            >
                                                Click Me
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default SweetAlertMainContent