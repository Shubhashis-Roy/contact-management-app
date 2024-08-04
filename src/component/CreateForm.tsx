import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addCard } from "../redux/slices/contact.ts";
import { useDispatch, useSelector } from "react-redux";

export default function CreateForm() {
  const { cardList, card } = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formIsValid, setFormIsValid] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    if (Object.keys(card).length > 0) {
      dispatch(addCard({ id: card.id, ...data }));
    } else {
      dispatch(addCard({ id: cardList.length, ...data }));
    }

    navigate("/");
  };

  // Set initial values when the component mounts
  useEffect(() => {
    if (Object.keys(card).length > 0) {
      setValue("firstName", card.firstName);
      setValue("lastName", card.lastName);
      setValue("status", card.status);
      setFormIsValid(true);
    } else {
      setFormIsValid(isValid);
    }
  }, [setValue, card, isValid, formIsValid]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Create Contact
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {" "}
          {/* Use handleSubmit */}
          <div className=" border-gray-900/10 pb-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="first-name"
                  className="block text-xl font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    type="text"
                    autoComplete="given-name"
                    {...register("firstName", { required: true })}
                    className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      First name is required
                    </span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="last-name"
                  className="block text-xl font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="last-name"
                    type="text"
                    autoComplete="family-name"
                    {...register("lastName", { required: true })}
                    className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      Last name is required
                    </span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-6 flex items-center mt-2">
                <label
                  htmlFor="status"
                  className="block text-xl font-medium leading-6 text-gray-900"
                >
                  Status
                </label>

                <div className="mt-0 flex ml-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="active"
                      value="Active"
                      {...register("status", { required: true })}
                      className="mr-2"
                    />
                    <label
                      htmlFor="active"
                      className="text-gray-900 text-[18px]"
                    >
                      Active
                    </label>
                  </div>
                  <div className="flex items-center ml-4">
                    <input
                      type="radio"
                      id="inactive"
                      value="Inactive"
                      {...register("status", { required: true })}
                      className="mr-2"
                    />
                    <label
                      htmlFor="inactive"
                      className="text-gray-900 text-[18px]"
                    >
                      Inactive
                    </label>
                  </div>
                </div>
                {errors.status && (
                  <span className="text-red-500 text-sm ml-2">
                    Status is required
                  </span>
                )}
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              // disabled={!isValid}
              disabled={!formIsValid}
              className={`flex w-full justify-center rounded-md  px-3 py-4 text-xl font-semibold leading-6 text-white shadow-sm ${
                formIsValid
                  ? "bg-indigo-600 hover:bg-indigo-500 cursor-pointer"
                  : "bg-gray-500"
              }  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
