/* eslint-disable quotes */
import Swal from "sweetalert2";

const swalSuccess = (title) => {
  Swal.fire({
    title,
    icon: "success",
    confirmButtonText: "Oke",
    confirmButtonColor: "#6200EE",
    reverseButtons: true,
  });
};

export default swalSuccess;
