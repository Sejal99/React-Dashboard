import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditorProvider,
  RichTextField,
} from "mui-tiptap";
import { setText, setUnsavedChanges } from "../utils/EditorSlice";

function Editor() {
  const dispatch = useDispatch();
  const editorState = useSelector((state) => state.editor);

  const editor = useEditor({
    extensions: [StarterKit],
    content: editorState?.text || '<p>Hello <b>world</b>!</p>',
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      dispatch(setText(content));
      dispatch(setUnsavedChanges(true))
    },
  });

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (editorState.unsavedChanges) {
        event.preventDefault();
        event.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [editorState.unsavedChanges]);

  return (
    <div className="w-full lg:w-[70%] text-[#fff] border-white border 1px solid white overflow-hidden rounded-lg m-3 shadow-lg shadow-white ">
      <RichTextEditorProvider editor={editor}>
        <RichTextField className="h-[20em] lg:h-[30em]"
          controls={
            <MenuControlsContainer className="dark:bg-gray-600 dark:text-gray-50 rounded-lg p-1">
              <MenuSelectHeading/>
              <MenuDivider className="bg-[#1E293B]"  />
              <MenuButtonBold />
              <MenuButtonItalic />
            </MenuControlsContainer>
          }
        />
      </RichTextEditorProvider>
    </div>
  );
}

export default Editor;
