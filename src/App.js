import './App.css';
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { RouterEndpoints } from "./routes/routes";
import { HomePage } from "./pages/Home/HomePage";
import { TodosPage } from "./pages/TodosPage/TodosPage";
import { AlbumsPage } from "./pages/Albums/AlbumsPage";
import { CommentsPage } from "./pages/CommentsPage/CommentsPage";
import { PostByCommentPage } from "./pages/PostByCommentPage/PostByCommentPage";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path={RouterEndpoints.index} element={<MainLayout/>}>
                    <Route path={RouterEndpoints.index} index element={<HomePage/>}/>
                    <Route path={RouterEndpoints.todos} element={<TodosPage/>}/>
                    <Route path={RouterEndpoints.albums} element={<AlbumsPage/>}/>
                    <Route path={RouterEndpoints.comments} element={<CommentsPage/>}>
                        <Route path={RouterEndpoints.postId} element={<PostByCommentPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
