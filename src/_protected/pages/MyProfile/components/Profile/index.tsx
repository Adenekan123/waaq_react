import { FaEdit } from "react-icons/fa";
import { Heading } from "../../../../../components/typography";
import { Modal } from "../../../../../components/ui";
import { Link } from "react-router-dom";
import { useLogoutUserAccount } from "../../../../../lib/react-query/queriesAndMutations";
import { Form } from "./Form";
import { useUserSession } from "../../../../../contexts/user";

export const Profile = () => {
  const {session} = useUserSession();
  const { mutateAsync: signOut, isPending } = useLogoutUserAccount();

  return (
    <>
      <div className="rounded-lg">
        <div className="bg-blue-500 px-6 py-4 flex justify-between items-center">
          <Heading title="Current user Details" type={4} styles="text-white" />
          <Link
            to={"?modal=edit-profile"}
            className="inline-flex items-center gap-2 font-semibold text-white md:text-lg"
          >
            <FaEdit />
            Edit
          </Link>
        </div>
        <div className="border pt-6">
          <table className="w-full">
            <tbody>
              <tr>
                <th className="px-6 py-2" align="left">
                  Full name
                </th>
                <td className="px-6 py-2" align="right">
                  {session?.user?.name}
                </td>
              </tr>
              <tr>
                <th className="px-6 py-2" align="left">
                  Email ID
                </th>
                <td className="px-6 py-2" align="right">
                  {session?.user?.email}
                </td>
              </tr>
              <tr>
                <th className="px-6 py-2" align="left">
                  Phone
                </th>
                <td className="px-6 py-2" align="right">
                  {session?.user?.phone}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="p-6 text-center border-t">
            <button
              onClick={() => signOut()}
              className=" text-sm md:text-lg bg-red-500 text-red-100 px-4 py-1 md:py-2 rounded-full font-semibold capitalize md:w-56"
            >
              {isPending ? "Loading..." : "Sign Out"}
            </button>
          </div>
        </div>
      </div>

      <Modal matcher="edit-profile" title="Personal Details">
        <Form />
      </Modal>
    </>
  );
};
