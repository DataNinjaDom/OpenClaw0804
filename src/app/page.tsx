"use client";

import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from "react";

/* ---------- Types ---------- */
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
}

type Filter = "all" | "active" | "completed";

/* ---------- Icons ---------- */
const IconCheck = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconEdit = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const IconTrash = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
  </svg>
);

const IconPlus = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const IconSun = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const IconMoon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

/* ---------- Utils ---------- */
const STORAGE_KEY = "todo-app-data";
const THEME_KEY = "todo-theme";

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function formatDate(ts: number): string {
  const now = Date.now();
  const diff = now - ts;
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (mins < 1) return "剛剛";
  if (mins < 60) return `${mins} 分鐘前`;
  if (hours < 24) return `${hours} 小時前`;
  if (days < 7) return `${days} 天前`;
  return new Date(ts).toLocaleDateString("zh-TW");
}

/* ---------- Component ---------- */
function loadTodos(): Todo[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Todo[];
  } catch {
    // ignore parse errors
  }
  return [];
}

function loadDarkMode(): boolean {
  if (typeof window === "undefined") return false;
  const theme = localStorage.getItem(THEME_KEY);
  return theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos());
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [isDark, setIsDark] = useState(() => loadDarkMode());
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const editInputRef = useRef<HTMLInputElement>(null);

  /* ----- Save to localStorage ----- */
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos, mounted]);

  /* ----- Theme toggle ----- */
  const toggleTheme = useCallback(() => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    if (next) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  /* ----- Focus edit input ----- */
  useEffect(() => {
    if (editingId && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.select();
    }
  }, [editingId]);

  /* ----- Actions ----- */
  const addTodo = () => {
    const text = input.trim();
    if (!text) return;
    const todo: Todo = {
      id: generateId(),
      text,
      completed: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    setTodos((prev) => [todo, ...prev]);
    setInput("");
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed, updatedAt: Date.now() } : t
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const startEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = () => {
    const text = editText.trim();
    if (!text) {
      setEditingId(null);
      return;
    }
    setTodos((prev) =>
      prev.map((t) =>
        t.id === editingId ? { ...t, text, updatedAt: Date.now() } : t
      )
    );
    setEditingId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  /* ----- Filtered todos ----- */
  const filtered = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  /* ----- Keyboard ----- */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") addTodo();
  };

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 max-w-2xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Todo List
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {activeCount > 0
                ? `還有 ${activeCount} 項待完成`
                : "全部完成 🎉"}
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-card hover:bg-accent border border-border transition-colors duration-200 text-foreground"
            aria-label="切換主題"
          >
            {isDark ? <IconSun className="w-5 h-5" /> : <IconMoon className="w-5 h-5" />}
          </button>
        </header>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="新增待辦事項…"
              className="w-full px-4 py-3 pl-12 rounded-xl bg-card border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
            />
            <IconPlus className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
          <button
            onClick={addTodo}
            disabled={!input.trim()}
            className="px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 active:scale-95"
          >
            新增
          </button>
        </div>

        {/* Filters */}
        {todos.length > 0 && (
          <div className="flex items-center gap-1 mb-4 p-1 rounded-xl bg-card border border-border">
            {([
              { key: "all" as Filter, label: "全部" },
              { key: "active" as Filter, label: "進行中" },
              { key: "completed" as Filter, label: "已完成" },
            ]).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filter === key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Todo List */}
        <div className="space-y-2">
          {filtered.length === 0 ? (
            <div className="text-center py-16 animate-fade-in">
              <div className="text-5xl mb-4">
                {filter === "completed" ? "✅" : "📝"}
              </div>
              <p className="text-muted-foreground">
                {filter === "completed"
                  ? "沒有已完成的項目"
                  : filter === "active"
                  ? "沒有進行中的項目"
                  : todos.length === 0
                  ? "還沒有待辦事項，新增一個吧！"
                  : "沒有符合的項目"}
              </p>
            </div>
          ) : (
            filtered.map((todo) => (
              <div
                key={todo.id}
                className="group flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-sm transition-all duration-200 animate-slide-in"
              >
                {/* Checkbox */}
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    todo.completed
                      ? "bg-primary border-primary text-primary-foreground"
                      : "border-input hover:border-primary"
                  }`}
                  aria-label={todo.completed ? "標記為未完成" : "標記為完成"}
                >
                  {todo.completed && <IconCheck className="w-3.5 h-3.5 animate-checkmark" />}
                </button>

                {/* Content / Edit */}
                {editingId === todo.id ? (
                  <div className="flex-1 flex gap-2">
                    <input
                      ref={editInputRef}
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveEdit();
                        if (e.key === "Escape") cancelEdit();
                      }}
                      className="flex-1 px-3 py-1.5 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <button
                      onClick={saveEdit}
                      className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      儲存
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm font-medium hover:bg-accent transition-colors"
                    >
                      取消
                    </button>
                  </div>
                ) : (
                  <div className="flex-1 min-w-0 cursor-pointer" onClick={() => toggleTodo(todo.id)}>
                    <p
                      className={`text-sm sm:text-base transition-all duration-200 ${
                        todo.completed
                          ? "text-muted-foreground line-through"
                          : "text-foreground"
                      }`}
                    >
                      {todo.text}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {formatDate(todo.createdAt)}
                    </p>
                  </div>
                )}

                {/* Actions */}
                {editingId !== todo.id && (
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={() => startEdit(todo)}
                      className="p-2 rounded-lg text-muted-foreground hover:text-accent-fg hover:bg-accent transition-colors"
                      aria-label="編輯"
                    >
                      <IconEdit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="p-2 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                      aria-label="刪除"
                    >
                      <IconTrash className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {todos.length > 0 && (
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              共 {todos.length} 項 · {completedCount} 已完成
            </p>
            {completedCount > 0 && (
              <button
                onClick={clearCompleted}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                清除已完成
              </button>
            )}
          </div>
        )}

        {/* Footer credit */}
        <footer className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            資料儲存於本機 LocalStorage · 關閉瀏覽器不會遺失
          </p>
        </footer>
      </main>
    </div>
  );
}