/* eslint-disable quotes */
import Swal from "sweetalert2";

const swallError = (title) => {
  Swal.fire({
    title,
    icon: "error",
    confirmButtonText: "Oke",
    confirmButtonColor: "#6200EE",
    reverseButtons: true,
  });
};

export default swallError;
