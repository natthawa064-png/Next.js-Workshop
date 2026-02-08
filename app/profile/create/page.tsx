
import { createProfileAction } from "@/actions/actions"
import { SubmitButton } from "@/components/form/Buttons"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"


const CreateProfile = () => {
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
            <div className="border p-8 rounded-md">
                <FormContainer action={createProfileAction}>
                    <div className="gird md:grid-cols-2 gap-4 mt-4">
                        <FormInput name="firstName" label="Firstname" type="text" placeholder="FirstName"/>
                        <FormInput name="lastName" label="LastName" type="text" placeholder="LastName"/>
                        <FormInput name="userName" label="Username" type="text" placeholder="UserName"/>
                    </div>

                    <SubmitButton text="CreateProfile" size="lg"/>
                </FormContainer>
            </div>
        </section>
    )
}
export default CreateProfile