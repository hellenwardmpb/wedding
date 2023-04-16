import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UploadImages } from ".";

const user = userEvent.setup();

test("should render input", () => {
    render(<UploadImages />);
    expect(screen.getByTestId("file-upload")).toBeInTheDocument();
});

test("Should allow a file upload", async () => {
    const onImageUpload = jest.fn();
    global.URL.createObjectURL = jest.fn();
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    render(<UploadImages onImageUpload={onImageUpload} />);
    const uploadButton = screen.getByTestId("file-upload");
    await user.upload(uploadButton, file);
    expect(uploadButton.files[0]).toStrictEqual(file);
    expect(uploadButton.files.item(0)).toStrictEqual(file);
    expect(uploadButton.files).toHaveLength(1);
});
