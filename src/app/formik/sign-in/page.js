"use client";
import DataModal from "@/components/common/DataModal";
import BannerComponent from "@/components/formik/BannerComponent";
import { SignInForm } from "@/components/formik/FormComponent";
import Link from "next/link";
import { useState } from "react";

const SignInPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {isModalOpen && (
        <DataModal closeModal={closeModal} modalData={modalData} />
      )}
      <div className="flex flex-auto flex-col">
        <div className="flex min-w-0 flex-auto flex-col items-center sm:flex-row sm:justify-center md:items-start md:justify-start">
          <div className="w-full px-4 py-8 h-full bg-card sm:w-auto sm:rounded-2xl sm:p-12 sm:shadow md:flex md:h-full md:justify-end md:rounded-none md:p-16 md:pt-24 md:shadow-none">
            <div className="mx-auto w-full max-w-80 sm:mx-0 sm:w-80">
              <div className="text-4xl font-extrabold leading-tight tracking-tight">
                Sign In
              </div>
              <div className="mt-0.5 flex items-baseline font-medium">
                <div>Don't have an account?</div>
                <Link
                  href={"/formik/sign-up"}
                  className="ml-1 text-indigo-500 hover:underline"
                >
                  Register
                </Link>
              </div>
              <SignInForm
                modalData={modalData}
                setModalData={setModalData}
                openModal={openModal}
              />
            </div>
          </div>
          <BannerComponent />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
