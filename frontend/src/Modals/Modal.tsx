import { ModalContext } from "@/context/ModalContext";
import React, { useContext } from "react";
import ReactDOM from "react-dom";

const Modal = ({ showModal, children, closeModal, title, custom }: any) => {
  const { state, dispatch } = useContext(ModalContext);
  if (!state.open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="flex justify-center items-center  overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl h-[calc(100%-3rem)]">
          {/*content*/}
          <div className="max-h-full border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {custom && children}
            {!custom && (
              <>
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => dispatch({ type: "close", payload: null })}
                  >
                    <span className="bg-transparent text-black opacity-10 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="pl-5 pr-5 pb-5 pt-2 flex-auto max-h-full">
                  {children}
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
     <button
       className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
       type="button"
       onClick={() => dispatch({type: 'close', payload:null})}
     >
       Close
     </button>
     <button
       className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
       type="button"
       onClick={() => closeModal(false)}
     >
       Save Changes
     </button>
   </div> */}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>,
    document.body
  );
};

export default Modal;
