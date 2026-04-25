"use client"

import { useForm, Controller } from "react-hook-form"
import { ArrowRight } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldError } from "@/components/ui/field"
import toast from "react-hot-toast"
import {motion} from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { submitError, submitStart, submitSuccess } from "@/redux/slices/form.slice"
import { apiService } from "@/services/api.services";

export default function ContactForm() {
const dispatch = useDispatch();
const { loading, error, success } = useSelector((state) => state.form);
    let defaultValues = {
        name: "",
        location: "",
        email: "",
        phone: "",
        jobTitle: "",
        organization: "",
        projectStart: "",
        message: "",
        source: "",
        consent: false,
    }
    const { control, handleSubmit,reset } = useForm({
        defaultValues: defaultValues
    })

    
    

    const onSubmit = async(data) => {
        try {
            dispatch(submitStart());

            const  response = await apiService.createContact(data);
            console.log("Response is:",response);

            toast.success("Form Submitted Successfully");
            reset(defaultValues);
            dispatch(submitSuccess());
        } catch (error) {
                dispatch(submitError(error.message));

            console.error("Error submitting form:",error);
            toast.error("Failed to submit form");
        }
        
    }

    return (
        <div className="flex flex-col gap-8 bg-black p-8">
            {/* Heading */}
            <div className="text-center text-white">
                <h1 className="text-4xl font-bold">
                    Infinite Possibilities Start with Indium
                </h1>
                <p className="mt-2">
                    Have a question? Connect with our team by filling out the form below.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto w-full space-y-6 text-white">

                {/* Row 1 */}
                <div className="flex justify-between">
                    <div className="w-[48%]">
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: "Please fill out this field." }}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: false }}
>
  {/* <Input ... /> */}
                                    <Input {...field} placeholder="Name" className="bg-[#252525]  py-8  px-6 border-none" />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
</motion.div>
                                </Field>
                            )}
                        />
                    </div>

                    <div className="w-[48%]">
                        <Controller
                            name="location"
                            control={control}
                            rules={{ required: "Please fill out this field." }}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                                <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
>
                                    <Input {...field} placeholder="Location" className="bg-[#252525] py-8  px-6 border-none" />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </motion.div>
                                </Field>
                            )}
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex justify-between">
                    <div className="w-[48%]">
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: "Please fill out this field." }}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        viewport={{ once: false }}
                                    >
                                        <Input {...field} placeholder="Official Email Address" className="bg-[#252525] py-8  px-6 border-none" />
                                    </motion.div>
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />
                    </div>

                    <div className="w-[48%]">
                        <Controller
                            name="phone"
                            control={control}
                            rules={{ required: "Please fill out this field." }}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                            viewport={{ once: false }}
                                        >
                                            <Input {...field} placeholder="Phone Number" className="bg-[#252525] py-8 px-6 border-none" />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </motion.div>
                                </Field>
                            )}
                        />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="flex justify-between">
                    <div className="w-[48%]">
                        <Controller
                            name="jobTitle"
                            control={control}
                            rules={{ required: "Please fill out this field." }}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                            viewport={{ once: false }}
                                        >
                                    <Input {...field} placeholder="Job Title" className="bg-[#252525] py-8  px-6 border-none" />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </motion.div>
                                </Field>
                            )}
                        />
                    </div>

                    <div className="w-[48%]">
                        <Controller
                            name="organization"
                            control={control}
                            rules={{ required: "Please fill out this field." }}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        viewport={{ once: false }}
                                    >
                                        <Input
                                            {...field}
                                            placeholder="Organization"
                                            className="bg-[#252525] py-8  px-6 border-none focus:ring-2 focus:ring-orange-700 focus:outline-none"
                                        />
                                    </motion.div>
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />
                    </div>
                </div>

                {/* Project Start */}
                <Controller
                    name="projectStart"
                    control={control}
                    rules={{ required: "Please fill out this field." }}
                    render={({ field, fieldState }) => (
                        <Field>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                            viewport={{ once: false }}
                                        >
                                            <p className="text-gray-400 mb-2">Project Start Date</p>

                            <div className="flex gap-6">
                                {["Immediate", "1-3 Months", "6-12 Months"].map((item) => {
                                    const isSelected = field.value === item
                                    
                                    return (
                                        <div
                                        key={item}
                                        className="flex items-center gap-3 cursor-pointer"
                                        onClick={() => field.onChange(item)}
                                        >
                                            <Checkbox
                                                checked={isSelected}
                                                onCheckedChange={() => field.onChange(item)}
                                                className="border-orange-500 data-[state=checked]:bg-orange-500 data-[state=checked]:text-black"
                                                />

                                            <span className="text-white">{item}</span>
                                        </div>
                                    )
                                })}
                            </div>

                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </motion.div>
                        </Field>
                    )}
                />

                {/* Message */}
                <Controller
                    name="message"
                    control={control}
                    rules={{ required: "Please fill out this field." }}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                            viewport={{ once: false }}
                                        >

                            <Textarea {...field} placeholder="Please Describe Your Requirement" className="bg-[#252525] border-none h-40" />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </motion.div>
                        </Field>
                    )}
                />

                {/* Select */}
                <Controller
                    name="source"
                    control={control}
                    rules={{ required: "Please fill out this field." }}
                    render={({ field, fieldState }) => (
                        <Field>
                            <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                            viewport={{ once: false }}
                                        >

                            <p className="text-gray-400 mb-2">How Did You Hear About Us?</p>

                            <select
                                {...field}
                                className="bg-[#252525] w-full py-4 px-4 text-white outline-none"
                                >
                                <option value="">—Please choose an option—</option>
                                <option>Google</option>
                                <option>LinkedIn</option>
                                <option>Referral</option>
                            </select>

                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </motion.div>
                        </Field>
                    )}
                />

                {/* Consent */}
                <Controller
                    name="consent"
                    control={control}
                    rules={{ required: "Please fill out this field." }}
                    render={({ field, fieldState }) => (
                        <Field>
                            <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4 }}
                                            viewport={{ once: false }}
                                        >

                            <div className="flex items-start gap-3">
                                <Checkbox className={'data-[state=checked]:bg-blue-500'} checked={field.value} onCheckedChange={field.onChange} />
                                <p className="text-sm text-gray-300">
                                    By providing your personal information (name, contact number, and email address), you consent to Indium collecting, storing, and using this data to send you updates, job openings, and related communications. Your data will be retained for a period of 5 years in accordance with our Data Back up and Restoration Policy. You have the right to withdraw your consent at any time. However, please note that withdrawing consent may affect our ability to provide you with the information or services you have requested. For more details, please review our Privacy Policy for Terms and Conditions.
                                </p>
                            </div>
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </motion.div>
                        </Field>
                    )}
                />

                {/* Submit */}
                <div className="flex justify-center cursor-pointer pt-6">
                    
                    <button disabled={loading} className="overflow-hidden bg-orange-600 text-black p-1 rounded-full">
                        <div className="relative group flex rounded-full items-center overflow-hidden pl-6 gap-3">
                            <span className="absolute inset-0 bg-black scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>

                            <span className="relative z-10 group-hover:text-white">
                                 {loading ? "Submitting..." : "Submit"}
                            </span>

                            <span className="relative z-10 bg-black text-white p-3 rounded-full">
                                <ArrowRight className="h-4 w-4" />
                            </span>
                        </div>
                    </button>
                </div>

            </form>
            {error && (
  <p className="text-red-500 text-center">{error}</p>
)}

{success && (
  <p className="text-green-500 text-center">
    Form submitted successfully!
  </p>
)}
        </div>
    )
}